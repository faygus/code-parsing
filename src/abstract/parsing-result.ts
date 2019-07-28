import { ICodeParsingResult, AnyParsingResult } from "../interfaces/i-code-parsing-result";
import { IDiagnostic } from "../interfaces/i-diagnostic";
import { Token } from "../models/tokens";

export class ParsingResult<
	TokenType extends Token,
	DiagnosticType,
	InterpretationType>
	implements ICodeParsingResult<TokenType, DiagnosticType, InterpretationType> {

	constructor(
		public text: string,
		private _tokens: TokenType[],
		private _diagnostics: IDiagnostic<DiagnosticType>[],
		private _interpretation: InterpretationType) {

	}

	getTokenAt(offset: number): TokenType | undefined {
		for (const tokenWithContext of this._tokens) {
			const token = tokenWithContext.tokenUnit;
			if (offset < token.range.start) {
				return undefined;
			}
			if (offset <= token.range.end) {
				return tokenWithContext;
			}
		}
		return undefined;
	}

	get tokens(): TokenType[] {
		const res: TokenType[] = [];
		for (const tokenWithContext of this._tokens) {
			const token = tokenWithContext.tokenUnit;
			res.push(tokenWithContext);
		}
		return res;
	}

	get diagnostics(): IDiagnostic<DiagnosticType>[] {
		const res: IDiagnostic<DiagnosticType>[] = [];
		res.push(...this._diagnostics);
		// TODO complexToken
		return res;
	}

	get interpretation(): InterpretationType {
		return this._interpretation;
	}
}
