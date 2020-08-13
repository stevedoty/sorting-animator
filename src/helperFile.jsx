//generates random intergers from min to max
export const randomIntFromInterval = (min, max) => {
  //create random number, transform into Int
  return Math.floor(Math.random() * (max - min + 1) + min )
}

//generates a new unsorted array
export const resetArray = () => {
  //create a new array
  const array = [];
  //iterate
  for(let i = 0; i < 350; i++ ){
    //generate new Int for every iteration, add to array
    array.push( randomIntFromInterval(5, 500) );
  }
  return array;
}
