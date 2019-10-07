function reverseArray (array) {
    let output = [];
    
    for (let i = array.length - 1; i >= 0; i--) {
        output.push(array[i]);
    }
    
    return output;
}
let arr = [1, 2, 3];
console.log(reverseArray(arr))

function reverseArrayInPlace (array) {
    for (let i = array.length - 1; i >= 0) {
        array[i] = array.push
    }
    
}