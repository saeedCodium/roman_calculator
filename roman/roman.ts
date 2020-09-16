

function roman_calculate(res1, res2) {

    const romanNumerals = [{
        numeral: "M",
        value: 1000
      }, {
        numeral: "CM",
        value: 900
      }, {
        numeral: "D",
        value: 500
      }, {
        numeral: "CD",
        value: 400
      }, {
        numeral: "C",
        value: 100
      }, {
        numeral: "XC",
        value: 90
      }, {
        numeral: "L",
        value: 50
      }, {
        numeral: "XL",
        value: 40
      }, {
        numeral: "X",
        value: 10
      }, {
        numeral: "IX",
        value: 9
      }, {
        numeral: "V",
        value: 5
      }, {
        numeral: "IV",
        value: 4
      }, {
        numeral: "I",
        value: 1
      }];
    
    const x = res1
    const y = x.map(romanNumerals['numeral'])
    console.log(x);
}


roman_calculate('XX', 'IV')