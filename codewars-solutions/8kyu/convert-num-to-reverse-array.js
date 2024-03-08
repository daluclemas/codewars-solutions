// 8kyu Convert number to reversed array of digits

// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

function digitize(n) {
  //code here
  const makeArr = n.toString().split('');
  const reverseArr = makeArr.map(item =>{
    return Number(item);
  });
  
  return reverseArr.reverse()
}

// the input is a number
// convert the number to a string
// convert the string to an array
// return a new array with the items converted to numbers
// return the new array in reverse order.

