tion for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    
    var newList = new ListNode();
    var carry = 0;
    var addTwo = function (l1,l2,newList){
        
        remainder = ( l1.val + l2.val ) % 10 + carry;
        carry = Math.floor(( l1.val + l2.val ) / 10);
        
        newList.val = remainder;
        
        if(l1.next && l2.next ) {
            newList.next = new ListNode();
            addTwo(l1.next,l2.next,newList.next)
        } else if(!l1.next && !l2.next && carry!= 0) {
              newList.next = new ListNode(carry);
        } 
        return newList;
    }
    
    
    addTwo(l1,l2,newList);
    return newList;
};
