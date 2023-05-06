var str3 = "abc def ghi"

function reverseString(str) {
    var strArray = str.split(" ")
    var reverseString = []
    for (var i=0; i<strArray.length; i++) {
        var word = strArray[i];
        var reverserWord = ""
        for (var j=word.length-1;j>=0; j--) {
            reverserWord += word[j]
        }
        reverseString.push(reverserWord)
    }
    return reverseString.join(" ")
}

console.log(reverseString(str3))

function reverseString_1(str) {
    var reversedStr = str.split(" ");
    var newArray = []
    for (var i=0; i<reversedStr.length; i++) {
        var word = reversedStr[i]
        var reverseWord = word.split("").reverse().join("");
        newArray.push(reverseWord)
    }
    var newString = newArray.join(" ")
    return newString
}
console.log(reverseString_1(str3))

// Split, reverse, join
const { performance } = require('perf_hooks');
const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
const reverseStrTimer = performance.now();
const reversed1 = story.split("").reverse().join("");
console.log(reversed1)
console.log(`Split/Reverse/Join Reverse String  took ${performance.now() - reverseStrTimer} milliseconds to run`);

