/*
Input: Array of elements

["h","o","l","a"]

Output: String with comma delimited elements of the array in th same order.

"h,o,l,a"
*/
function printArray(array){
    let res="";
    for(let i=0;i<array.length-1;i++){
    
      res=res+array[i]+',';
        }
    res=res+array[array.length-1];
    return res;
    }
    
  