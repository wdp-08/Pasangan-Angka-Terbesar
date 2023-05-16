function dua_pasangan_terbesar(data) {
    let result = [];
    let dataString = data.toString();

    for (let i = 0; i < dataString.length - 1; i++) {
        result.push(dataString[i] + dataString[i + 1]);
    }
    for (let h = 0; h < result.length; h++) {
        for (let j = 0; j < result.length; j++) {
            if (result[j] < result[j + 1]) {
                [result[j], result[j+1]] = [result[j+1], result[j]]
            }
        }
    }
    return result[0];
}

// TEST CASES
console.log(dua_pasangan_terbesar(641573)); // 73
console.log(dua_pasangan_terbesar(183928)); // 92