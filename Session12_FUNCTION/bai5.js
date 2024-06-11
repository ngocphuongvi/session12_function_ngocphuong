function findStrInArr(arr, str) {
    let value = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes(str)) {
            value.push(arr[i]);
        }
    }
    return value;
}
function main(arr, str) {
    let value = findStrInArr(arr, str);
    if (value.length > 0) {
        console.log("Các phần tử trong mảng chứa chuỗi '" + str + "' là:");
        for (let i = 0; i < value.length; i++) {
            console.log(value[i]);
        }
    } else {
        console.log("Không có phần tử nào trong mảng chứa chuỗi '" + str + "'");
    }
}

let arrayStr = ["Hello world", "JavaScript là ngôn ngữ lập trình phổ biến", "Chào mừng bạn đến với JavaScript"];
let inputStr = prompt("Nhập chuỗi bất kỳ: ");

main(arrayStr, inputStr);

