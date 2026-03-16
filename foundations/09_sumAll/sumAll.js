const sumAll = function(a, b) {
    let isNegative = a < 0 || b < 0;
    let isNotInteger = !(Number.isInteger(a) && Number.isInteger(b));
    if (isNegative || isNotInteger) return "ERROR";

    if (a > b) {
        const temp = a;
        a = b;
        b = temp;
    }
    
    let sum = 0;
    for (let i = a; i <= b; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
