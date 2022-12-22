// 8kyu Opposites Attract

// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

function lovefunc(flower1, flower2){
  // moment of truth
  if(flower1 % 2 !== 0 && flower2 % 2 === 0){
    return true;
  }
  
  if(flower1 % 2 === 0 && flower2 % 2 !== 0){
    return true;
  }
   
  return false;

  
  
}

// the first if checks if flower1 is odd and flower2 is even
// te second if checks if flower2 is odd and flower1 is even