import { ICodeParsingResult } from "../interfaces/i-code-parsing-result";
import { IDiagnostic } from "../interfaces/i-diagnostic";
import { Token } from "../models/tokens";
import { ParsingResult } from "./parsing-result";

/*export class ParsingResultBuilder<
	TokenType extends Token,
	DiagnosticType,
	InterpretationType> {

	protected _token: TokenType;
	protected _diagnostics: IDiagnostic<DiagnosticType>[] = [];
	protected _interpretation: InterpretationType;
	protected _text: string;

	setToken(token: TokenType): void {
		this._token = token;
	}

	addDiagnostic(diagnostic: IDiagnostic<DiagnosticType>): void {
		this._diagnostics.push(diagnostic);
	}

	set text(value: string) {
		this._text = value;
	}

	getResult(): ICodeParsingResult<TokenType, DiagnosticType, InterpretationType> {
		return new ParsingResult(this._text, this._token, this._diagnostics, this._interpretation);
	}

	setInterpretation(value: InterpretationType): void {
		this._interpretation = value;
	}

	//merge(data: ICodeParsingResult<TokenType, DiagnosticType, InterpretationType>, offset: number): void {
		//this._tokens.push(...data.tokens.map(t => {
			//(<any>t.tokenUnit)._offset += offset; // TODO
			//return t;
		//}));
		//this._diagnostics.push(...data.diagnostics.map(d => {
			//d.offset += offset;
			//return d;
		//}));
	//}
}
*/
