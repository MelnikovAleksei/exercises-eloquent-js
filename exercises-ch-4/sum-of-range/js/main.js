function range (start, end, step = start < end ? 1 : -1) {
    let arr = [];
    if (step > 0) {
        for (let i = start; i <= end; i += step) arr.push(i);
    } else {
        for (let i = start; i >= end; i += step) arr.push(i);
    }
    return arr;
}
console.log(range(20, 10, -2));

function sum (arr) {
    let result = 0;
    for (let i of arr) {
        result += i;
    }
    return result;
}
console.log(sum(range(20, 10, -2)))