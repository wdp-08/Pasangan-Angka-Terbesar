function angkabesar(number) {
  var numberString = number.toString();
  var largestPair = null;

  for (var i = 0; i < numberString.length - 1; i++) {
    var currentPair = parseInt(numberString.substr(i, 2));

    if (largestPair === null || currentPair > largestPair) {
      largestPair = currentPair;
    }
  }

  return largestPair;
}

var angka1 = 641573  //73
var angka2 = 12783456 //83
var angka3 = 910233 //91
var angka4 = 79918293 //99

console.log(angkabesar(angka1));
console.log(angkabesar(angka2));
console.log(angkabesar(angka3));
console.log(angkabesar(angka4));
