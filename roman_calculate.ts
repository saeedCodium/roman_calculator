const conversion = {"M" : 1000 , "D" : 500 , "C" : 100,"L" : 50, "X" : 10 , "V": 5, "I" : 1}

function roman_calculate(romanNum) {
  const array = romanNum.split('')
  let total = 0;
  let current;
  let currentValue;
  let next;
  let nextValue;

  array.map((ele, i) => {
    current = ele;
    currentValue = conversion[current]

    next = array[i+1];
    nextValue = conversion[next]

    if (currentValue < nextValue) {
      total -= (currentValue);
    } else {
      total += (currentValue);
      }
  })

  return total
   
}

const result = roman_calculate('XXX')
console.log(result)