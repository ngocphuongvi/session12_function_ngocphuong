function capitalizedStr(str) {
    let arr = str.split(" ");
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr.join(" ");
}
let chuoiKhaiBao = "hello and goobye";
console.log("capitalizedStr", capitalizedStr(chuoiKhaiBao))