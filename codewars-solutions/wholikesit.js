// WHO LIKES IT?

// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"



function likes(names) {
  // TODO
//   first check the length 
let message = "";
  const nameLength = names.length

  if(nameLength === 0){
    message = "no one likes this"
  }

  if(nameLength === 1){
    message = `${names[0]} likes this`
  }else if (nameLength === 2){
    message = `${names[0]} and ${names[1]} like this`
  }else if (nameLength === 3){
    message = `${names[0]}, ${names[1]} and ${names[2]} like this`
  }else if (nameLength > 3){
    message = `${names[0]}, ${names[1]} and ${nameLength - 2} others like this`
  }

  return message;
}



