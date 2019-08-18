import { ICodeParsingResult } from "../interfaces/i-code-parsing-result";
import { Token } from "../models/tokens";
import { StringNavigationInfos } from "../utils/string-navigation-infos";
import { StringParser } from "../utils/string-parser";
import { ParsingResultBuilder } from "./parsing-result-builder";

export abstract class BaseCodeParser<
	TokenType extends Token,
	DiagnosticType,
	InterpretationType,
	Builder extends ParsingResultBuilder<TokenType, DiagnosticType, InterpretationType>
	> {
	protected _stringParser: StringParser;
	protected _parsingResultBuilder: Builder;

	constructor(protected _data: string,
		protected _endingCharacter?: string) {
		this._stringParser = new StringParser(_data);
		this._parsingResultBuilder = this.getBuilder();
	}

	protected abstract getBuilder(): Builder;

	parse(): ICodeParsingResult<TokenType, DiagnosticType, InterpretationType> {
		this.buildResult();
		return this._parsingResultBuilder.close(this._stringParser.previousString);
	}

	get offset(): number {
		return this._stringParser.offset;
	}

	protected abstract buildResult(): void;

	protected nextOperation(operation: () => void): void {
		if (!this._stringParser.currentChar) return;
		if (this._stringParser.nextString.startsWith(this._endingCharacter)) return;
		operation.apply(this);
	}

	protected navigateBeforeEndingCharacter(data: string[]): StringNavigationInfos {
		const res = this._stringParser.navigateUntil([...data, this._endingCharacter]);
		if (res.stopPattern === this._endingCharacter) {
			this._stringParser.previous(this._endingCharacter.length);
		}
		return res;
	}
}
