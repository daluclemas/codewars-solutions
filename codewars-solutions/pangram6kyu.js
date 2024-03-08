// Codewars detect pangram challenge - 6kyu
// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string){
  //...
  let alphabets = "abcdefghijklmnopqrstuvwxyz";

   let alphabetArr = alphabets.split("");

  let replaceString = string.replace(/\W/gi,"");

  return alphabetArr.every((char)=>replaceString.toLowerCase().indexOf(char) !== -1);
}
