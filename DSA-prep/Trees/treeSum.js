// Write a function, treeSum, that takes in the root of a binary tree that contains number values. 
// The function should return the total sum of all values in the tree.
//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

// treeSum(a); // -> 21
//BFS
// const treeSum = (root) => {
//   if(!root) return 0
//   const queue = [root]
//   let result=0
//   while(queue.length >0){
//    const current= queue.shift()
//    result+=current.val
    
//    if(current.left) queue.push(current.left)
//    if(current.right) queue.push(current.right) 
//   }
  
//   return result
// };
// const treeSum =(root)=>{
//   if(!root) return 0
//   let result=root.val
  
//   result+= treeSum(root.left)
//   result+= treeSum(root.right)
  
//   return result
// }
