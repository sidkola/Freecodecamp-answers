function chunkArrayInGroups(arr, size) {
 var chunkyArray = []; while (arr.length > 0){ chunkyArray.push(arr.splice(0,size)); } return chunkyArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
