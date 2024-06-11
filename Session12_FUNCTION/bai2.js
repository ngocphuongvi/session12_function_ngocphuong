function checkMax(arrayString) {
    let max = arrayString[0];
    for (let i = 0; i < arrayString.length; i++) {
        if (arrayString[i].length > max.length) {
            max = arrayString[i];
        }
    }
    return max;
}

let array = ["a", "abc", "Hello"];
console.log("checkMax", checkMax(array))
// bài 2
// input: là 1 array chứa các chữ ex: ["a", "ab", "hello"]
// input: fn => input là 1 string array => return => string có length 