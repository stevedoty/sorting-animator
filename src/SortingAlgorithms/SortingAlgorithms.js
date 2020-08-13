export const mergeSort = array => {
  //special cases
  //if (array === 0)return;
  if (array.length === 1) return array;
  //find middle of array
  const middleIndx = Math.floor(array.length/2);
  //create a smaller array from original array from index0 to middleIndx
  const firstHalf = mergeSort(array.slice(0, middleIndx));
  //create a smaller array from original array from middleIndx to end
  const secondHalf =  mergeSort(array.slice(middleIndx));
  //create new array
  const sortedArray = [];
  //create index variables
  let i=0,
    j=0;
  //while interating over arrays
  while( i < firstHalf.length && j < secondHalf.length){
    //if the first value is less than the second value
    if(firstHalf[i] < secondHalf[j]){
      //push [i] then add to i
      sortedArray.push(firstHalf[i++])
    }else{
      //push [j] then add to j
      sortedArray.push(secondHalf[j++])
    }
  }
  while(i < firstHalf.length) sortedArray.push(firstHalf[i++])
  while(j < secondHalf.length) sortedArray.push(secondHalf[j++])
  return sortedArray;
}
