function pasanganTerbesar(number) {
    let larger = 0;
    let now = 0;
    number = number.toString();

    for (let i = 0; i < number.length; i++) {
        now = Number(number[i]+number[i+1]);

        if (now > larger){
            larger = now;
        }
    }
    return larger;
}

console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(79918293)); // 99