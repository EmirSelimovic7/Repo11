// Only change code below this line
function mySplice(arr1, arr2, n) {
    var splice = [];
    
    splice.push(...arr2.slice(0, n));
    splice.push(...arr1.reverse());
    splice.push(...arr2.slice(n, arr2.length));

    return splice;
}
// Only change code above this line
console.log(mySplice([1, 2, 3], [4, 5], 1)); // Change this line
console.log(mySplice([1, 2, 3], [4, 5], 2));
console.log(mySplice(["b", "c"], ["a", "d"], 1));
console.log(mySplice(["Dell", "Philips"], ["Samsung", "AOX", "Sony"], 2));
module.exports = mySplice;