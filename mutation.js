function mutation(arr) {
 arr.sort(function(a,b){
   return a.length - b.length;
 });
return arr[0].toLowerCase().split("").every(function(x){
    if(arr[1].toLowerCase().indexOf(x) === -1){
      return false;
    }
    else{
      return true;
    }
  });
}

mutation(["hello", "hey"]);
