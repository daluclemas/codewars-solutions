// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

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
      str += `${item} + `
    }
  })

  return str.slice(0,-3)
}


// better solution
const expandedForm = n => n.toString()
                            .split("")
                            .reverse()
                            .map( (a, i) => a * Math.pow(10, i))
                            .filter(a => a > 0)
                            .reverse()
                            .join(" + ");