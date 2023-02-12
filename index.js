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

console.log(expandedForm(70304))