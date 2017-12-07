/**
 * @param {string} s
 * @return {number}
 */
    var lengthOfLongestSubstring = function(s) {
    var arr = []
    var getRepeatArr = function (s) {
        var arr1 = [];
        var flag = false;
      if(s.length) {
         s.split('').map((i)=>{
            if (!(arr1.indexOf(i) > -1) && !flag) {
                 arr1.push(i);
            } else {
                flag = true;
            }
        });
        
        if(arr1.length >  0) {
            arr.push(arr1.join(""));
        }

         var arrNew = s.split("");
         arrNew.shift();
         getRepeatArr(arrNew.join(""));
         
        } else {
            return;
        }
    } 
    getRepeatArr(s);
    var maxS = arr.reduce((a,b)=>{ return a.length > b.length ? a:b; })
    return maxS.length;
};