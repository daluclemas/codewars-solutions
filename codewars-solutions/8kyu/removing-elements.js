// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

function removeEveryOther(arr){
  //your code here
  const filteredArr = arr.filter((item,i)=> (i + 1) % 2 !== 0)

  return filteredArr;
}

function removeEveryother(arr){
  //your code here
//   const filteredArr = arr.filter((item,i)=> (i + 1) % 2 !== 0)

//   return filteredArr;

  const filteredArr = [];
  for(let i = 0; i<arr.length; i++){
    if((i + 1) % 2 !== 0){
      filteredArr.push(arr[i])
    }
  }

  return filteredArr;
}