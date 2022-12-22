// better solution to convert the num to reverse array

function digitize(n) {
  return String(n).split('').reverse().map(Number)
}

console.log(digitize(9865))

const arr = ["1","3"];

const maparr = arr.map(Number)
console.log(maparr)