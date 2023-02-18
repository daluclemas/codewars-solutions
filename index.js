// better solution to convert the num to reverse array

function digitize(n) {
  return String(n).split('').reverse().map(Number)
}

console.log(digitize(9865))

const arr = ["1", "3"];

const maparr = arr.map(Number)
console.log(maparr)

// break a camel case
function solution(string) {
  string = string.split('').map(function(el) {
    if (el === el.toUpperCase()) {
      el = ' ' + el
    }
    return el
  })
  return string.join('')
}

let str = "25";

console.log(str[0] * str[1])

function persistence(num) {
  num = num.toString();
  let count = 0;

  while (num.length > 1) {
    count++;
    num = num.split('').map(Number).reduce((a, b) => a * b).toString()
  }

  return { count, num };
}

console.log(persistence(1233))

function longest(s1, s2) {
  // your code
  let newSortedArr = (s1 + s2).split('').sort();

  let set = new Set(newSortedArr);

  let str = ''

  set.forEach(item => {
    str += item
  })

  return str



}

console.log(longest('xyaabbbccccdefww', 'abcdefklmopqwxy'));


// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
function expandedForm(num) {
  // Your code here
  let newArr = [], i = 0,str = '';
  num = num.toString();
  let len = num.length-1

  while (i <= num.length) {
    let t = Number(num[i]) * Math.pow(10,len)
    newArr.push(t);
    i++;
    len--;
    if (len < 0) {
      break;
    }
  }

  newArr.forEach((item,index,arr)=>{
    if(item !== 0){
      str += `${item} +`
    }
  })

  return str.slice(0,-3)

}

function getSum(a, b)
{
   //Good luck!
  let sum = 0 ;
   if(a === b){
      sum += a;
    return sum ;
    }

  if(b < a){
    for(let i = b; i <= a; i++){  
    sum+=i
    }

  }else{
    
  for(let i = a; i <= b; i++){  
    sum+=i
  }  
  }
  return sum;
}

console.log(getSum(2,2))

// if(a < b){
//     for(;a <= b; a++){
//       sum+=a
//     }
//   }else{
//     for(;a <= b; a++){
//       sum+=a
//     }
//   }

function sumArray(array) {

//   sort array 
//   pop the last item
//   shift the first item
//   return sum
  
  let sortedArray = array.sort((a,b)=>a-b);
  
  sortedArray.pop();
  sortedArray.shift()
  console.log(sortedArray)
  
}

sumArray([3])
console.log('rot13 ////////')

function rot13(message){

  let alph = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
  let cipher = 'nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM';
  

let encodedStr = '',reg = /[a-zA-Z]/gi;

  message.split('').forEach(item=>{
    
    if(alph.indexOf(item) === -1){
     encodedStr += item 
      
    }
    encodedStr += cipher[alph.indexOf(item)] 
  })

return {encodedStr};

}


function XO(str) {
    //code here
  let xCount = 0;
  let oCount = 0;
  
  str.toLowerCase().split('').forEach(item=>{
    if(item === 'x'){
      xCount+=1;
    }else if(item === 'o'){
      oCount+=1;
    }
  })

  if(xCount === oCount){

    return true
  }else{
    return false
  }

 
}

function getCount(str) {
  
  let count = 0;
  
  let regex = /[aeiou]/gi;
  str.split('').forEach(item=>{
  if(item.match(regex)){
    count+=1
  }
  })
 
  return count;
}

console.log(getCount('adaeoi'))