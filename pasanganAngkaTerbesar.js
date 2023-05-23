function findLargestPair(angka) {
    const angkaStr = angka.toString();
    let largestPair = "";
    
    for (let i = 0; i < angkaStr.length - 1; i++) {
      const pair = angkaStr[i] + angkaStr[i + 1];
      
      if (pair > largestPair) {
        largestPair = pair;
      }
    }
    
    return largestPair;
  }

  console.log(findLargestPair(183928));     // Output: 92
  console.log(findLargestPair(641573));     // Output: 73
  console.log(findLargestPair(12783456));   // Output: 83
  console.log(findLargestPair(910233));     // Output: 91
  console.log(findLargestPair(79918293));   // Output: 99  