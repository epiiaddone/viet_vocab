import { similar_vowels } from "../data/viet_data";

const getSimilarVowels = (vowel) =>{
	let result = [];

	similar_vowels.forEach( (group) =>{
		if(group.includes(vowel)){
			result = [...group];			
		}
	})

	if(result.length ===0) result.push(vowel);
	return result;
}

export default getSimilarVowels;