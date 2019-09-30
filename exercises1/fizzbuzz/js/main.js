function fizzBuzz() {
  let arr = [];
  for (let i = 1; i <= 30; i++) {
    arr.push(i);
    let num = i;
    switch (num % 3 == 0 && num % 5 == 0) {
      case true: console.log("FizzBuzz");
        // no break
    }
    switch (num % 3 == 0) {
      case true: console.log("Fizz");
        // no break
    }
    switch (num % 5 == 0) {
      case true: console.log("Buzz");
        break; // after all checks stop
    }
    /* does not display all matches
      if (num % 3 == 0 && num % 5 == 0) {
        console.log("FizzBuzz");
      } else if (num % 5 == 0) {
        console.log("Buzz");
      } else if (num % 3 == 0) {
        console.log("Fizz");
      } else {
      console.log(num);
    }
    */
  }
}
