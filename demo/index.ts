import { StringParser } from '../src/utils/string-parser';

const data = `hey man
hey hey
 hello world`;
const p = new StringParser(data);
p.next(14);
// console.log(p.currentChar);
p.next();
const res = p.navigateToFirstNonEmptyCharExcept('\n\n');
console.log('res', res);
// p.navigateToFirstNonEmptyChar();
console.log(p.nextString);