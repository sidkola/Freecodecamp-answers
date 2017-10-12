function titleCase(str){
  var answer=[];
  str = str.toLowerCase().split(" ");
  answer = str.map(capitalize).join(" ");
  return answer;
}

function capitalize(x) {
  var originalLetter = x.charAt(0);
  var capitalLetter = originalLetter.toUpperCase();
  x = x.replace(originalLetter,capitalLetter);
  return x;
}
