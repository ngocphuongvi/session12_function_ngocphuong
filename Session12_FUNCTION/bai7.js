function findPairWithSum(arr, targetSum) {
    let seenNumber = {};
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        let complement = targetSum - num;
        if (seenNumber[complement] !== undefined) {
            return [complement, num];
        }
        seenNumber[num] = true;
    }
    return null;
}

let array = [1, 2, 3, 4, 6, 7, 8, 23, 12, 45]
let targetSum = parseInt(prompt("Nhập vào 1 số nguyên: "));
result = findPairWithSum(array, targetSum);

if (result) {
    console.log("Cặp số có tổng bằng", targetSum, "là", result);
} else {
    console.log("Không có cặp số nào có tổng bằng", targetSum);
}

