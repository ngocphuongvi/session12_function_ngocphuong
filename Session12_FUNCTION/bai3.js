function findLengthWithoutSpaces(str) {
    let arr = [];
    arr = str.split(" ").join("");
    console.log("Số ký tự trong chuỗi không tính ký tự trống là: ", arr.length);
}
let string = "Chào các bạn!";
findLengthWithoutSpaces(string);
