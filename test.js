const ROMAN = {
    1000: 'M',
    500: 'D',
    100: 'C',
    50: 'L',
    10: 'X',
    5: 'V',
    1: 'I'
};

function convertToRoman(num) {
    if (num < 0) return NaN;

    let tousands = num - (num % 1000);
    let hundreds = (num - tousands) - (num % 100);
    let tens = (num - (tousands + hundreds)) - (num % 10);
    let ones = (num - (tousands + hundreds + tens)) - (num % 1);

    return num;
}

console.log(convertToRoman(3684));