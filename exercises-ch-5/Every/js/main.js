function every(array, test) {
  for (let element of array) {
    if (test) {
      return true;
    }
  }
}
