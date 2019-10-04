function range(start, end, step) {
  let arr = [];
  if (step < 0) {
      step *= -1;
  }
  if (step === undefined) {
    for (let i = start; i <= end; i++) {
        arr.push(i);
    }
  } else if (start > end) {
    for (let i = start; i >= end; i -= step) {
      arr.push(i);
    }
  } else {
      for (let i = start; i <= end; i += step) {
        arr.push(i);
      }
    }
  return arr;
}
console.log(range(1, 10, 2))

function sum (arr) {
    let result = 0;
    for (let value of arr) {
        result += value;
    }
    return result;
}

console.log(sum(range(1, 10, 2)))