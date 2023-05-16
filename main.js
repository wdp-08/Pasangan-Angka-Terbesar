function pasanganAngkaTerbesar(number) {
  let stringAngka = number.toString();
  let terbesar = 0;

  for (let i = 1; i < stringAngka.length; i++) {
    const angka = stringAngka[i - 1] + stringAngka[i];
    if (terbesar < angka) {
      terbesar = angka;
    }
  }

  return terbesar;
}

console.log(pasanganAngkaTerbesar(641573));
console.log(pasanganAngkaTerbesar(12783456));
console.log(pasanganAngkaTerbesar(910233));
console.log(pasanganAngkaTerbesar(79918293));
