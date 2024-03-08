// Sum without highest and lowest number

// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6

function sumArray(array) {

//   sort array 
//   pop the last item
//   shift the first item
//   return sum
  
  if(array === null || array === undefined){
    return 0;
  }
  
  let sortedArray = array.sort((a,b)=>a-b);
  
  sortedArray.pop();
  sortedArray.shift()
  
  return sortedArray.reduce((initial, total)=>initial + total,0)
  
}