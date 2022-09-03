// this code gives proper output  in vs code but not in LeetCode


var rotate = function(nums, k) {
    console.log(nums)
    let empty1 = []
    let empty2 = []
   for (let i = k+1; i < nums.length; i++){
       empty1.push(nums[i])
      
   }
   for (let j = 0; j <= k; j++){
       empty2.push(nums[j]) 
       
   }
      return empty1.concat(empty2);
};
nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
console.log(rotate(nums, k))