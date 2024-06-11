function countItem(str, itm) {
    let countItm = str.split(itm).length - 1;
    console.log("Số lần xuất hiện của", itm, "trong chuỗi `", str, "` là:", countItm);
}
let inputStr = prompt("Nhập vào 1 chuỗi bất kỳ");
let inputValue = prompt("Nhập vào 1 ký tự bất kỳ");
countItem(inputStr, inputValue)