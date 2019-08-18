import { IDiagnostic } from "./i-diagnostic";
import { Token } from "../models/tokens";

export interface ICodeParsingResult<
	TokenType extends Token,
	DiagnosticType,
	InterpretationType> {
	token: TokenType;
	diagnostics: IDiagnostic<DiagnosticType>[];
	interpretation: InterpretationType;
	text: string;
}

export type AnyParsingResult = ICodeParsingResult<any, any, any>;
