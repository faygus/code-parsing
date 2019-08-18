import { ICodeParsingResult } from "../interfaces";
import { Token, TokenUnit } from "../models/tokens";
import { IDiagnostic } from "../interfaces/i-diagnostic";
import { ParsingResult } from "./parsing-result";

export abstract class ParsingResultBuilder<TokenType extends Token, DiagnosticType, InterpretationType> {
	protected _diagnostics: IDiagnostic<DiagnosticType>[] = [];
	protected _interpretation: InterpretationType;

	close(text: string): ICodeParsingResult<TokenType, DiagnosticType, InterpretationType> {
		const tokenUnit = new TokenUnit(text, 0);
		return new ParsingResult(text, this.getToken(tokenUnit), this._diagnostics, this._interpretation);
	}

	addDiagnostic(diagnostic: IDiagnostic<DiagnosticType>): void {
		this._diagnostics.push(diagnostic);
	}

	protected abstract getToken(tokenUnit: TokenUnit): TokenType;
}
