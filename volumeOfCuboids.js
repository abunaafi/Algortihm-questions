function findDifference(a, b) {
    //loading...
   let cubeA = a[0] * a[1] * a[2];
    let cubeB = b[0] * b[1] * b[2];
    let result = Math.abs(cubeA - cubeB);
    return result;
  }