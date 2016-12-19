var ROMAN = {
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

    for (var key in ROMAN) {
        if (ROMAN.hasOwnProperty(key)) {
            if (num % key === 0) {
                console.log(ROMAN[key]);
            }
        }
    }

    return num;
}

console.log(convertToRoman(36));