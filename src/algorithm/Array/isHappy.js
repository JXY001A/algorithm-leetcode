/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  
  let calculateHappyNumberMap = {};
  let happyNumber = n;
  let currentHappy = n;
  let powerSum = 0;
  
  while (!calculateHappyNumberMap[currentHappy]) {
    while (happyNumber>=10) {
      powerSum += Math.pow(happyNumber % 10,2);
      happyNumber = parseInt(happyNumber / 10);
    }
    powerSum += Math.pow(happyNumber,2);
    
    if(powerSum === 1) {
      return true;
    }else {
      calculateHappyNumberMap[currentHappy] = true;
      currentHappy = powerSum;
      happyNumber = powerSum;
      powerSum = 0;
    }
  }

  return false;
};

console.log('isHappy', isHappy(19))
console.log('isHappy', isHappy(2))
