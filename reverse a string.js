function reverseString(str) {
  var str1 = str.split("");
  str1 = str1.reverse();
  str1 = str1.join("");
  return str1;
}

reverseString("hello");
