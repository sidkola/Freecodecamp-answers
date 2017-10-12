function factorialize(num) {
  var factorial = 1;
  for(var i=num; i>0; i--){
  factorial = factorial * i;
}
  return factorial;
}

factorialize(5);
