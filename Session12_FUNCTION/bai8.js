function canConstructString(source, target) {
    let charCount = {};

    for (let char of source) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (let char of target) {
        if (!charCount[char] || charCount[char] <= 0) {
            return false;
        }
        charCount[char]--;
    }

    return true;

}

function main() {
    let sourceString = "abcdefg";
    let inputString = prompt("Nhập vào chuỗi bất kỳ: ");

    let result = canConstructString(sourceString, inputString);
    if (result) {
        console.log("Có thể tạo chuỗi đã nhập từ các ký tự trong chuỗi đã khai báo.");
    } else {
        console.log("Không thể tạo chuỗi đã nhập từ các ký tự trong chuỗi đã khai báo.");
    }
}

main();
