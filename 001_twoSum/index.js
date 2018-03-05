/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(arr, target) {
    let indexArr = [];
    let isMath = false;
   arr.map((a)=>{
      arr.map((b)=>{
        if(a !== b && (a + b === target) && !isMath) {
          indexArr.push(arr.indexOf(a));
          indexArr.push(arr.indexOf(b));
          isMath = true;
        }
      });
    });
 return indexArr;
};