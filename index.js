// Code
function pasanganTerbesar(num) {
    let numString = num.toString();
    let numArr = [];
    for (let i = 0; i < numString.length - 1; i++) {
        numArr.push(numString[i] + numString[i + 1]);
    }
    for (let j = 0; j < numArr.length; j++) {
        for (let k = 0; k < numArr.length; k++) {
            if (numArr[k] < numArr[k + 1]) {
                let temp = numArr[k];
                numArr[k] = numArr[k + 1];
                numArr[k + 1] = temp;
            }
        }
    }
    return numArr[0];
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(183928)); // 92