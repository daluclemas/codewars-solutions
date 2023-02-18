// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

// correct but doesnt consider other chars
// function rot13(message){
//   //your code here
//   let alphabets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
//   let cipher = 'nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM';
  

// let encodedStr = '';

//   message.split('').forEach(item=>{
//     let index = alphabets.indexOf(item);

//     encodedStr += cipher[index]
    
//   })

// return encodedStr;
// }

function rot13(message){
  //your code here
  let alphabets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
  let cipher = 'nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM';
  
 return message.replace(/[a-zA-Z]/gi, letter => cipher[alphabets.indexOf(letter)])
}