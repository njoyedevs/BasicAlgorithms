function reverseString(str) {
    // base case
    if (str.length === 0) {
        return str;
    }
    // recursive case
    else {
        console.log(str.substr(1) + str.charAt(0))

        return reverseString(str.substr(1)) + str.charAt(0);
    }
}

// example usage
let str = "hello";
console.log(reverseString(str)); // output: "olleh"