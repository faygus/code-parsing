import { ICodeParsingResult } from "../interfaces/i-code-parsing-result";
import { IDiagnostic } from "../interfaces/i-diagnostic";
import { Token } from "../models/tokens";

export class ParsingResult<
	TokenType extends Token,
	DiagnosticType,
	InterpretationType>
	implements ICodeParsingResult<TokenType, DiagnosticType, InterpretationType> {

	constructor(
		public text: string,
		private _token: TokenType,
		private _diagnostics: IDiagnostic<DiagnosticType>[],
		private _interpretation: InterpretationType) {

	}

	get token(): TokenType {
		return this._token;
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
