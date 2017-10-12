function palindrome(str){
  var symbols = /\W|_/g;
  str = str.replace(symbols,"").toLowerCase();
  var palindromic = str.replace(symbols,"").toLowerCase().split("").reverse("").join("");
  return Boolean(str === palindromic);
}

palindrome("__kumar");
