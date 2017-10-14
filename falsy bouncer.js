function bouncer(arr) {
 arr = arr.filter(truthyVals);
  return arr;
}
function truthyVals(arg){
  return (Boolean(arg) === true);
}

bouncer([7, "ate", "", false, 9]);
