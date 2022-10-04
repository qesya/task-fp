const nums = [2, 3, 4, null, 6, 'a', 3];

const isEven = (number) => {
  return number % 2 === 0;
}

const sumArray = (numStr) => {
  let sum = 0;
  for (let i = 0; i < numStr.length; i++) {
    if(typeof nums[i] === 'number'){
      if(isEven(nums[i])){
        sum += nums[i];
      }
    }
  }
  return sum;
}

console.log(`result: ${sumArray(nums)}`);