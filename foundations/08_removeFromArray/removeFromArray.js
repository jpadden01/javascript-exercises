const removeFromArray = function(arr) {
    let remove = Array.from(arguments).slice(1);
    return arr.filter((val) => !remove.includes(val));
};

// Do not edit below this line
module.exports = removeFromArray;
