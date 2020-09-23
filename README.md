# Выполненные учебные задания из 2-5 глав книги [Eloquent JavaScript (электронная копия книги)](https://eloquentjavascript.net/) 

### Exercises: 

* [Looping a triangle](https://github.com/MelnikovAleksei/exercises-eloquent-js/tree/master/exercises-ch-2/log-triangle/js/main.js): 
  * Сonditions: Write a loop that makes seven `console.log` calls to output the triangle 
 
* [FizzBuzz](https://github.com/MelnikovAleksei/exercises-eloquent-js/blob/master/exercises-ch-2/fizzbuzz/js/main.js): 
  * Сonditions: Write a program that uses `console.log` to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print `"Fizz"` instead of the number, and for numbers divisible by 5 (and not 3), print `"Buzz"` instead. When you have that working, modify your program to print `"FizzBuzz"` for numbers that are divisible by both 3 and 5 (and still print `"Fizz"` or `"Buzz"` for numbers divisible by only one of those). 
  
* [Chessboard](https://github.com/MelnikovAleksei/exercises-eloquent-js/blob/master/exercises-ch-2/chessboard/js/main.js): 
  * Сonditions: Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard. 
  
* [Bean counting](https://github.com/MelnikovAleksei/exercises-eloquent-js/blob/master/exercises-ch-3/count-char/js/main.js): 
  * Сonditions: You can get the Nth character, or letter, from a string by writing `"string"[N]`. The returned value will be a string containing only one character (for example, `"b"`). The first character has position 0, which causes the last one to be found at position `string.length - 1`. In other words, a two-character string has length 2, and its characters have positions 0 and 1. Write a function `countBs` that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string. Next, write a function called `countChar` that behaves like `countBs`, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite `countBs` to make use of this new function. 
  ```javascript
  console.log(countBs("BBC"));
  // → 2
  console.log(countChar("kakkerlak", "k"));
  // → 4
  ```
* [Deep comparison](https://github.com/MelnikovAleksei/exercises-eloquent-js/blob/master/exercises-ch-4/deep-comparision/js/main.js): 
  * Сonditions: The `==` operator compares objects by identity. But sometimes you’d prefer to compare the values of their actual properties. Write a function `deepEqual` that takes two values and returns true only if they are the same value or are objects with the same properties, where the values of the properties are equal when compared with a recursive call to `deepEqual`. To find out whether values should be compared directly (use the `===` operator for that) or have their properties compared, you can use the `typeof` operator. If it produces `"object"` for both values, you should do a deep comparison. But you have to take one silly exception into account: because of a historical accident, `typeof null` also produces `"object"`. The `Object.keys` function will be useful when you need to go over the properties of objects to compare them. 
  ```javascript
  let obj = {here: {is: "an"}, object: 2};
  console.log(deepEqual(obj, obj));
  // → true
  console.log(deepEqual(obj, {here: 1, object: 2}));
  // → false
  console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
  // → true
  ```
* [A list](https://github.com/MelnikovAleksei/exercises-eloquent-js/blob/master/exercises-ch-4/list/js/main.js): 
  * Сonditions: Objects, as generic blobs of values, can be used to build all sorts of data structures. A common data structure is the list (not to be confused with array). A list is a nested set of objects, with the first object holding a reference to the second, the second to the third, and so on. A nice thing about lists is that they can share parts of their structure. For example, if I create two new values `{value: 0, rest: list}` and `{value: -1, rest: list}` (with `list` referring to the binding defined earlier), they are both independent lists, but they share the structure that makes up their last three elements. The original list is also still a valid three-element list. Write a function `arrayToList` that builds up a list structure like the one shown when given `[1, 2, 3]` as argument. Also write a `listToArray` function that produces an array from a list. Then add a helper function prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or `undefined` when there is no such element. If you haven’t already, also write a recursive version of `nth`. 
 ```javascript
 console.log(arrayToList([10, 20]));
 // → {value: 10, rest: {value: 20, rest: null}}
 console.log(listToArray(arrayToList([10, 20, 30])));
 // → [10, 20, 30]
 console.log(prepend(10, prepend(20, null)));
 // → {value: 10, rest: {value: 20, rest: null}}
 console.log(nth(arrayToList([10, 20, 30]), 1));
 // → 20
 ```
* [Reversing an array](https://github.com/MelnikovAleksei/exercises-eloquent-js/blob/master/exercises-ch-4/reversing-an-array/js/main.js): 
  * Сonditions: Arrays have a `reverse` method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, `reverseArray` and `reverseArrayInPlace`. The first, `reverseArray`, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, `reverseArrayInPlace`, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method. Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you expect to be useful in more situations? Which one runs faster? 
  ```javascript
  console.log(reverseArray(["A", "B", "C"]));
  // → ["C", "B", "A"];
  let arrayValue = [1, 2, 3, 4, 5];
  reverseArrayInPlace(arrayValue);
  console.log(arrayValue);
  // → [5, 4, 3, 2, 1]
  ```
* [The sum of a range](https://github.com/MelnikovAleksei/exercises-eloquent-js/blob/master/exercises-ch-4/sum-of-range/js/main.js):  
  * Сonditions: Write a `range` function that takes two arguments, `start` and `end`, and returns an array containing all the numbers from `start` up to (and including) `end`. Next, write a `sum` function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55. As a bonus assignment, modify your `range` function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements go up by increments of one, corresponding to the old behavior. The function call `range(1, 10, 2)` should return `[1, 3, 5, 7, 9]`. Make sure it also works with negative step values so that `range(5, 2, -1)` produces `[5, 4, 3, 2]`. 
  ```javascript
  console.log(range(1, 10));
  // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  console.log(range(5, 2, -1));
  // → [5, 4, 3, 2]
  console.log(sum(range(1, 10)));
  // → 55
  ```
* [Everything](https://github.com/MelnikovAleksei/exercises-eloquent-js/blob/master/exercises-ch-5/Every/js/main.js): 
  * Сonditions: Analogous to the `some` method, arrays also have an `every` method. This one returns true when the given function returns true for every element in the array. In a way, `some` is a version of the || operator that acts on arrays, and `every` is like the && operator. Implement `every` as a function that takes an array and a predicate function as parameters. Write two versions, one using a loop and one using the `some` method. 
  ```javascript
  function every(array, test) {
  // Your code here.
  }

  console.log(every([1, 3, 5], n => n < 10));
  // → true
  console.log(every([2, 4, 16], n => n < 10));
  // → false
  console.log(every([], n => n < 10));
  // → true
  ```
* [Your own loop](https://github.com/MelnikovAleksei/exercises-eloquent-js/blob/master/exercises-ch-5/Loop/js/main.js): 
  * Сonditions: Write a higher-order function `loop` that provides something like a `for` loop statement. It takes a value, a test function, an update function, and a body function. Each iteration, it first runs the test function on the current loop value and stops if that returns false. Then it calls the body function, giving it the current value. Finally, it calls the update function to create a new value and starts from the beginning. When defining the function, you can use a regular loop to do the actual looping. 
  ```javascript
  loop(3, n => n > 0, n => n - 1, console.log);
  // → 3
  // → 2
  // → 1
  ```
* [Dominant writing direction](https://github.com/MelnikovAleksei/exercises-eloquent-js/blob/master/exercises-ch-5/filter/js/main.js): 
  * Сonditions: Write a function that computes the dominant writing `direction` in a string of text. Remember that each script object has a direction property that can be `"ltr"` (left to right), `"rtl"` (right to left), or `"ttb"` (top to bottom). The dominant direction is the direction of a majority of the characters that have a script associated with them. The `characterScript` and countBy functions defined earlier in the chapter are probably useful here. 
  ```javascript
  function dominantDirection(text) {
  // Your code here.
  }

  console.log(dominantDirection("Hello!"));
  // → ltr
  console.log(dominantDirection("Hey, مساء الخير"));
  // → rtl
  ```
