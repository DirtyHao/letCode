/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let result;
    for (let i =0; i< s.length; i++) {
        var len = s.indexOf(s[i],i +1)
         if(len > -1) {
             result = s.substring(i,len +1);
             break;
         }  
        
    }
    return result;
};