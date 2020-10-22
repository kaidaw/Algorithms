// function mySlice(arr,start,end){
//     let returnArray = []
//     for (let i=start,i<end,i++){
//         returnArray.push(arr[i])
//     }
//     return returnArray
// }

function mySlice(arr, start = 0, end = arr.length) {
  let returnArray = [];
  for (let i = start; i < end; i++) {
    returnArray.push(arr[i]);
  }
  return returnArray;
}

console.log(mySlice([1, 2, 3, 4, 5], 3));
