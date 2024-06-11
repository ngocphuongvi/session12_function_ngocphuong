function findLargestSubarray(arr) {
    let maxSum = 0;
    let currentSum = 0;
    let startIndex;
    let endIndex;
    for (let i = 0; i < arr.length; i++) {
        arr.sort(function (a, b) { return a - b });
        currentSum += arr[i];
        if (currentSum > maxSum) {
            maxSum = currentSum;
            endIndex = i;
        }
        if (currentSum < 0) {
            currentSum = 0;
            startIndex = i + 1;
        }
    }
    let largestSubarray = arr.slice(startIndex, endIndex + 1);
    return largestSubarray;
}

let inputArray = [1, -3, 5, -2, 9, -8, 6];
console.log("Mảng con có tổng các phần tử lớn nhất:", findLargestSubarray(inputArray));

