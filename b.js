// const nums = [1, 1, 2, 2, 3, 4, 4, 5];

// function removeDuplicate(nums) {
//   const newArr = [...new Set(nums)];
   
//    return newArr;
  
  
//  }

// const lengthAfterRemoval = removeDuplicate(nums);
// console.log(lengthAfterRemoval); // Output: [1, 2, 3, 4, 5, 4, 4, 5]
//console.log(nums.slice(0, lengthAfterRemoval)); // Output: [1, 2, 3, 4, 5]
 
// function isPalindrome(s){
//   s = s.replace(/[^A-Za-z0-9]/g,'').toLowerCase();
//    return s === s.split('').reverse().join('');
// }

// let s = "A man, a plan, a canal:Panama";

// console.log(isPalindrome(s));
// function twoSum(nums, target){
//   for(let i=0; i<nums.length-1; i++){
//     for(letj=1+1; j<nums.length; j++){
//       if(nums[j] + nums[i] === target){
//         retrun [i, j];
//       }
//     }
//   }
//   return null;
// }

// const nums = [2, 7, 11, 15];
// const target = 9;
// console.log(twoSum(nums, target));

// const number = [1, 2, 3, 4, 5];
// const evenNum = number.filter((number) => number % 2 === 0);
// console.log(evenNum);

// let num = [5, 2, 7, 100, 50, 1], arr = [2,4, 35, 67, 15, 8, 6, 3];
// const numSort = num.concat(arr).sort((a, b) => a-b);
// console.log(numSort);

// var lengthOfLongestSubstring = function(s){
//     let setMap = new Set();
//     let max = 0;
//     let index = 0;
//     for(let i=0; i<s.length; i++){
//         let key = s[i];
//         while(setMap.has(key)){
//             setMap.delete(s[index]);
//             index++;
//         }
//         setMap.add(key);
//         max = Math.max(max, setMap.size);
//     }
//     return max;
// }

// const s = "abcabcbb";
// console.log(lengthOfLongestSubstring(s));


// const nums = [1, 2, 3, 4, 5];

//    const runningSum = (nums) => {
//     let sum = 0;
//     const newSum = nums.map(num => sum += num);
//     return newSum;
//   }

//   console.log(runningSum(nums));
  
// 
// var maxSubArray = function(nums) {
//     let sum = 0;
//     let max = -Infinity;

//     for (let i = 0; i < nums.length; i++) {
//         sum += nums[i];
//         max = Math.max(max, sum);

//         // Reset sum if it becomes negative
//         if (sum < 0) {
//             sum = 0;
//         }
//     }

//     return max;
// }

// // Example usage
// const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// console.log(maxSubArray(nums));  // Output: 6


// var search = function(nums, target){
//     for(let i=0; i<nums.length; i++){
//         if(nums[i] === target){
//             return i;
//         }
//     }
//     return -1;
// }

// const nums = [1, 3, 4, 5, 7];
// const target = 7;
// console.log(search(nums, target));

// var rotate = function(nums, k){
//     while(nums.length <= k){
//         k = k-nums.length;
//     }

//     const temp = nums.splice(0, nums.length-k)
//     nums.push(...temp);
//     return nums;
// }
//  var nums = [1, 2, 3, 4, 5, 6, 7];
//  var k = 3;
//  console.log(rotate(nums, k));

//  function reverseString(str){
//     let rev = "";
//     for(let i= str.length-1; i>=0; i--){
//         rev += str[i];

//     }
//     return rev;
//  }

//  var str = "hello";
//  console.log(reverseString(str));

//RemoveDupliacte
// const str = "abbccdde";
// var removeDuplicate =  function(str){
//   const arr = Array.from(str);
//   const newArr = [...new Set(arr)];
//   return newArr;
// }
// console.log(removeDuplicate(str));

//Anagram code

// let s = 'abhi';
// let t = 'achi';

// if(s.length != t.length){
//   console.log(false);
//   return;
// }else{
//   for(let i=0; i<s.length; i++){
//     if(s[i] != t[i]){
//       console.log(false);
//       return;
//     }
//   }
// }
// console.log(true);

 //Max nd min

//  function findMaxndMin(arr){
//   if(arr.length === 0)
//   return {max : null, min: null};

//   let max = arr[0];
//   let min = arr[0];

//    for(let i=0; i<arr.length; i++){
//     if(arr[i] > max){
//       max = arr[i];
//     }

//     if(arr[i] < min){
//       min = arr[i];
//     }
//    }
//    return {max : max, min : min};

//  }

//  const arr = [5, 3, 8, 1, 12, 7]

//  const res = findMaxndMin(arr);
//  console.log('Maximum:', res.max);
//  console.log('Minium:' , res.min);

// FindDuplicate

// function FindDuplicate(arr){
//   let duplicate = [];
//   for(let i=0; i<arr.length-1; i++){
//     for(let j=i+1; j<arr.length; j++){
//       if(arr[i] === arr[j] && !duplicate.includes(arr[i])){
//         duplicate.push(arr[i]);
//       }
//     }
//   }
//   return duplicate;
// }

//  const arr = [1, 2, 3, 4, 3, 4, 5, 7, 2];
//  console.log(FindDuplicate(arr));

//map nd reduce function

// const student = [
//   {name:'Smaith', rollNumber:31, marks:80},
//   {name:'Jeany', rollNumber:21, marks:60},
//   {name:'John', rollNumber:15, marks:30},
//   {name:'Tiger', rollNumber:43, marks:100},
  
// ]
// const totalMarks = student.map((stu) => {
//   if(stu.marks<60){
//     stu.marks += 20;
//   }
//   return stu;
// }).filter((stu) => stu.marks>60).reduce((acc, curr) => acc+curr.marks, 0);

// console.log(totalMarks);


//Reduce function

let product = [
  {name:'banana', price:5},
  {name:'apple', price:3},
  {name:'orange', price:8},
  {name:'mango', price:9},
  {name:'kiwi', price:1},
]

let sum = product.reduce((acc, curr) => acc+curr.price, 0);
console.log(sum);
  
// Longest substring without repeting character

var lengthOfLongestSubstring = function(s) {
  const setMap = new Set();
  let max = 0;
  let index = 0;
  for(let i = 0; i<s.length; i++){
      let key = s[i];
      while(setMap.has(key)){
          setMap.delete(s[index]);
          index++;
      }
      setMap.add(key);
      max = Math.max(max, setMap.size);
  }
  return max;
};




