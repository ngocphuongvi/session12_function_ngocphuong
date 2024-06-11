let a = +prompt("Nhập vào số a")
let b = +prompt("Nhập vào số b")
let c = +prompt("Nhập vào số c")

function testChanLe(number) {
    if (number % 2 === 0) {
        console.log(number, " là số chẵn")
    } else {
        console.log(number, " là số lẻ")
    }
}


testChanLe(a)
testChanLe(b)
testChanLe(c)
