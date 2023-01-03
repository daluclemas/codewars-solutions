// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
//   const makeArr = string.split('');
//   const capString = string.toUpperCase().split('');
//   const newString = string.split();
  
//   for(let i = makeArr.length-1; i >=0 ; i--){
//     if(makeArr[i] === capString[i]){
//       newString.splice(i,0,' ')
//     }
//   }
  
//   return newString.join('')
  
  return string.replace(/[A-Z]/g, " $&");
}