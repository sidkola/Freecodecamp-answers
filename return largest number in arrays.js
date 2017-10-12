
function largestOfFour(arr) {
  // You can do this!
  var largest = [];
  
  for(var i=0 ; i< arr.length ; i++){
    var largestNumber =0;
    for(var j=0 ; j< arr[i].length ; j++)
      if(largestNumber < arr[i][j]){
        largestNumber = arr[i][j];
      }
    largest.push(largestNumber);
  }
    return largest;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
