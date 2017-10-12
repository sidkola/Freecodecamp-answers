
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
 var check = str.length - target.length ;
  return Boolean(str.substr(check) === target);
  
}

confirmEnding("Bastian", "n");
