#题目
    Given a string s, find the longest palindromic substring in s. You may 
    assume that the maximum length of s is 1000.
    
    Input: "babad"
    
    Output: "bab"
    
    Note: "aba" is also a valid answer.


#解题
__v1.0__  Complexity o(n)2

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

