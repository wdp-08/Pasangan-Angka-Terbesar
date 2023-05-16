function dua_pasangan_terbesar(data) {
    let dataArr = [];
    let dataString = data.toString();

    for (let i = 0; i < dataString.length - 1; i++) {
        dataArr.push(dataString[i] + dataString[i + 1]);
    }
    for (let h = 0; h < dataArr.length; h++) {
        for (let j = 0; j < dataArr.length; j++) {
            if (dataArr[j] < dataArr[j + 1]) {
                [dataArr[j], dataArr[j+1]] = [dataArr[j+1], dataArr[j]]
            }
        }
    }
    return dataArr[0];
}

// TEST CASES
console.log(dua_pasangan_terbesar(641573)); // 73
console.log(dua_pasangan_terbesar(183928)); // 92