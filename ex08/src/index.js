// Only change code below this line
function myMutation(arr) {
    arr.sort(function(a, b) {
        if (a.length < b.length) {
        return false;
        }
        else {
            return a.length - b.length;
        }
    });
    return arr[0].toLowerCase().split("").every(function(x){
        if(arr[1].toLowerCase().indexOf(x) === -1) {
            return false;
        } else {
            return true;
        }
    });

    }

// Only change code above this line
console.log(myMutation(["hello", "hey"])); // Change this line
console.log(myMutation(["hello", "Hello"]));
console.log(myMutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
console.log(myMutation(["Mary", "Army"]));
console.log(myMutation(["Mary", "Aarmy"]));
console.log(myMutation(["Alien", "line"]));
console.log(myMutation(["floor", "for"]));
console.log(myMutation(["hello", "neo"]));
console.log(myMutation(["voodoo", "no"]));
console.log(myMutation(["ate", "date"]));
console.log(myMutation(["Tiger", "Zebra"]));
console.log(myMutation(["Noel", "Ole"]));
module.exports = myMutation;