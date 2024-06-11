let numbers1 = [1, 2, 3, 4, 5]
let numbers2 = [2, 4, 6, 8, 10]


function sumTotalItemArray(inputArray, test) {
    console.log("test", test)
    let sum = 0;
    for (let i = 0; i < inputArray.length; i++) {
        sum += inputArray[i];
    }
    console.log("sum", sum);
    return sum;
}

console.log("sumTotalItemInArray 1:", sumTotalItemArray(numbers1, 5))
console.log("sumTotalItemInArray 2:", sumTotalItemArray(numbers2))

//Yêu cầu người dùng nhập vào số a và b
// Viết function tính tổng a và b

let numberA = +prompt("Nhập vào số a");
let numberB = +prompt("Nhập vào số b");

function sumTotal(a, b) {
    // let sum = a + b;
    // return sum;
    return a + b;
}
console.log("Tổng 2 số a và b là : ", sumTotal(numberA, numberB))


function sayHello() {
    alert("Hello")
}
sayHello()
