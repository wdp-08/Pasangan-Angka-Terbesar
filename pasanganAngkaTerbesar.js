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

  