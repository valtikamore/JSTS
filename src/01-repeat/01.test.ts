import { mult } from "../01/01";
import {splitIntoWords, sum} from "./01";

test('sum should be correct',()=>{
    const a = 1;
    const b = 2;
    const c = 3;

    const result = sum(a,b);
    const result2 = sum(b,c);
    expect(result).toBe(3);
    expect(result2).toBe(5);
});
test('mult should be correct',()=>{
    const a = 1;
    const b = 2;
    const c = 3;

    const result = mult(a,b);
    const result2 = mult(b,c);
    expect(result).toBe(2);
    expect(result2).toBe(6);
});
test('split into words  should be correct',()=>{
    const sentence1 = 'hello my friend';
    const sentence2 = 'Js - programming lang'

    const result1 = splitIntoWords(sentence1)
    const result2 = splitIntoWords(sentence2)
    expect(result1.length).toBe(3);
    expect(result1[0]).toBe('hello');
    expect(result1[1]).toBe('my');
    expect(result1[2]).toBe('friend');

    expect(result2.length).toBe(4);
    expect(result2[0]).toBe('Js');
    expect(result2[1]).toBe('-');
    expect(result2[2]).toBe('programming');
    expect(result2[3]).toBe('lang');

});