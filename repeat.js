
function repeatStringNumTimes(str, num) {
  // repeat after me
 var answer="";
  while (num >0){
    answer = answer.concat(str);
    num--;
  }
  return answer;
}

repeatStringNumTimes("abc", 3);
