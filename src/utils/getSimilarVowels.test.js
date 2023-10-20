import { describe, expect, test } from "vitest";
import getSimilarVowels from "./getSimilarVowels"

describe("getSimilarVowels test", ()=>{

    test("Should only include original vowel if not in array", ()=>{
        const result = getSimilarVowels('i');
        expect(result).toStrictEqual(['i']);
    })
    test("3 letter vowel test", ()=>{
        const result = getSimilarVowels('ươi');
        expect(result).toStrictEqual(['uôi', 'ươi']);
    })
    test("2 letter vowel test", ()=>{
        const result = getSimilarVowels('ua');
        expect(result).toStrictEqual(['ua', 'uă', 'uâ', 'ưa']);
    })
    test("1 letter vowel test", ()=>{
        const result = getSimilarVowels('ô');
        expect(result).toStrictEqual(['o', 'ô', 'ơ']);
    })

})