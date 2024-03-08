// Switch It Up
// When provided with a number between 0-9, return it in words.

// Input :: 1

// Output :: "One".

// If your language supports it, try using a switch statement.


function switchItUp(number){
//Write your own Code!
  let output;
  switch(number){
      case 0:
      output = "Zero";
      break;
    case 1:
      output = "One";
      break;
    case 2:
      output = "Two";
      break;
      case 3:
      output = "Three";
      break;
      case 4:
      output = "Four";
      break;
      case 5:
      output = 'Five';
      break;
      case 6:
      output = 'Six';
      break;
      case 7:
      output = "Seven";
      break;
      case 8:
      output = "Eight";
      break;
      case 9:
      output = "Nine";
      break;
      
  }
  
  return output
}