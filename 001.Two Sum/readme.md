#题目
    /**
     - @param {number[]} nums
     - @param {number} target
     - @return {number[]}
    */   
     var twoSum = function(arr, target) {
        return index Array
     }

如上所示参数1为一个数组,参数2为数组里任意两个元素相加的合。
要求返回任意两个相加值和参数2相等的索引。

#解题
__v1.0__ 有点蠢得办法,双循环。时间复杂度 o(n2）

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

__v2.0__ 反向思考第一个循环里知道结果值，知道了求和的两个数之一,那么完全是能解决问题了。

    var twoSum = function(arr, target) {
        let indexArr = [];
        let isMath = false;
       arr.map((a,index)=>{
         if (!isMath) {
           var index2 = arr.indexOf(target - a)
           if (index2 > 0){
            indexArr.push(index);
            indexArr.push(index);
            isMath = true;
           }  
         }  
        });
     return indexArr;
    }; 

