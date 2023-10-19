var chunk = function(arr, size) {
    let newArray = []
 
 if(size > arr.length) {
     newArray.push(arr)
 }
 else {
     if(size < arr.length) {
   let count = Math.ceil(arr.length / size)
    for (let i = 0; i < arr.length; i += size) {
     newArray.push(arr.slice(i, i + size));
 }
     }
     else {
          return arr
     }
   
 
 }
 return newArray
 
 
 };