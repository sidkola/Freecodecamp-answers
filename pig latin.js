
function translatePigLatin(str) {
  var vowel=["a","e","i","o","u"];
  var result= str.split("");
  
  if (vowel.includes(str.charAt(0))){
    return str += "way";
  }
  else{
    for(var i=0; i<str.length;i++){
      if(!vowel.includes(str[i])){
        result.push(result.shift());
      }
      else{
        result.push("ay");
        return result.join("");
      }
    }
  }
  
}

translatePigLatin("consonant");
