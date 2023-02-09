// better solution to convert the num to reverse array

function digitize(n) {
  return String(n).split('').reverse().map(Number)
}

console.log(digitize(9865))

const arr = ["1","3"];

const maparr = arr.map(Number)
console.log(maparr)

// break a camel case
function solution(string) {
  string = string.split('').map(function (el) {
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

    while(num.length > 1){
      count++;
        num = num.split('').map(Number).reduce((a,b)=>a*b).toString()
    }

  return {count, num};
}

console.log(persistence(1233))

function longest(s1, s2) {
  // your code
  let newSortedArr = (s1 + s2).split('').sort();

  let set = new Set(newSortedArr);

let str = ''

  set.forEach(item=>{
    str+= item
  })

  return str
  
  
  
}

console.log(longest('xyaabbbccccdefww', 'abcdefklmopqwxy'));