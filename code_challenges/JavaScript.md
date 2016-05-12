# Code Challenges

## Javascript

- JS-1. Write a function that accepts two arrays (of the same length and whose elements are Numbers) as parameters, and returns an array that is the sum of the two input arrays, element-wise.

   Test case, assuming the function is named `addArrays`:
```javascript
  var x = [ 1,  2,  3];
  var y = [10, 10, -4];
  var r = addArrays(x, y); // r is [11, 12, -1]
```

- JS-2. Extend the function to handle boolean input arrays as well, such that if the input arrays' elements are boolean, return an array that contains the logical OR of the two input arrays, element-wise. If the input arrays are Numbers, still compute the sum, element-wise.

  Test case, assuming the function is named `addArrays`:
```javascript
  var x = [ 1,  2,  3];
  var y = [10, 10, -4];
  var r = addArrays(x, y); // r is [11, 12, -1]

  var b1 = [true, true,  false, false];
  var b2 = [true, false, true,  false];
  var r = addArrays(b1, b2); // r is [true, true, true, false]
```

- JS-3. Extend the function to handle strings such that if the input arrays' elements are Strings, return an array that is the concatenation of the input arrays, element-wise.<br>
  See if you can do this with only a text editor and a browser console to test/debug your code. Get to the point where you don't need to look up info on the internet, and don't need to look at code samples to figure out the syntax.

  Test case, assuming the function is named `addArrays`:
```javascript
  var x = [ 1,  2,  3];
  var y = [10, 10, -4];
  var r = addArrays(x, y); // r is [11, 12, -1]

  var b1 = [true, true,  false, false];
  var b2 = [true, false, true,  false];
  var r = addArrays(b1, b2); // r is [true, true, true, false]

  var s1 = ['big ', 'cute '];
  var s2 = ['dog',  'cat'];
  var r = addArrays(s1, s2); // r is ['big dog', 'cute cat']
```

- JS-4: Write a function that accepts an array as input and a value, and returns boolean 'true' if the value is in the array, and returns boolean 'false' if the value is not in the array. Write the function so that its search logic relies on a `for` loop.
  Example: If the input array is [1, 2, 3] and the input value is 2, your function should return true, but for the same input array if the input value is 99999 (or the string "I like ice cream"), the function should return false.
```javascript
  function isInArray(myArray, myValue) {
  
    // Write logic here

    // return boolean result here
  }
  
  console.log(isInArray([1, 2, 3], 2));       // Should print true
  console.log(isInArray([1, 2, 3], "frogs")); // Should print false
```
- JS-5: Same as JS-4, but instead of using a "for" loop, use the .indexOf() method that all JavaScript arrays have.

- JS-6: This "question" is actually a set of 12 JavaScript exercises at:
  www.w3resource.com/javascript-exercises/javascript-basic-exercises.php

- JS-7 (intermediate): Write a function that meets the following requirements:
  - a. Accepts five parameters that can each be of any data type (arguments can even be missing, such as when other code calls your function with fewer than five arguments)
  - b. Returns an array of only the parameter values that are unique. Order of the values doesn't matter

  An example to illustrate the requirements:
```javascript
   function getUnique(a,b,c,d,e) {
     // Add logic here

     // Return an array that contains only unique values here
   }

   console.log(getUnique(3, -9, 3, -9, -9)); // [3, -9]
   console.log(getUnique([1,2], "shoe", true, "shoe", true)); // [[1,2], "shoe", true]
```
- JS-8 (intermediate): Create a function that accepts five parameters and prints out all five parameters. Call that function using a single array that contains 5 elements, but "spread" that array into five arguments during the call. Hint: Look up .apply() and related array methods.
- JS-9 (advanced): Same as JS-8, but create an object constructor function and do the same "spread" operation. This is easy to do in JS version 6, but a bit complex in JS 5.
- JS-10 (advanced): Write a function that accepts one parameter N, and prints a sequence of numbers 1 thru N, inclusive, using recursion (no explicit loops or functional methods). Write JS code that calls your function. Example:

      function myCountPrinter() {
        // Write your logic here
      }
      myCountPrinter(1); // Prints 1<br>
      myCountPrinter(4); // Prints 1, 2, 3, 4<br>
      myCountPrinter(0); // (N/A -- This doesn't print anything)

- JS-11 (advanced): Write a function that has one parameter and returns an array that contians all primes (prime numbers) less than N.

- JS-12 (advanced): Extend your code from JS-11 to compute the percentage of numbers below N that are prime.  E.g., When N = 13, the prime array is [2, 3, 5, 7, 11], which has 5 primes; the percentage is 5/12 = 41.67%.
  Plot this percentage as a function N and describe the shape of the plot.

- JS-13 (advanced): Write a function that has one parameter and finds (by computing) and returns the one-millonth smallest prime number.

- JS-14 (advanced):
Jenny goes to the market with $5 to buy fruit for a gift basket. She's plans to spend exactly $5.00.  The market sells fruits per piece at non-round prices, so it's not easy to make the total bill exactly $5. But Jenny is prepared and uses an app that she wrote to find her options; she enters unit prices of the fruit she sees, then runs the app, and voilà! All possible combinations of fruit that total $5 appear on her screen.<br><br>
  Challenge*: Write an app that behaves like Jenny's app. It must correctly list all possible combinations of fruit that total exactly $5.<br>
  The goal is aways 500 cents (= $5).<br>
  Solutions can include multiple fruit of the same type; assume each fruit is available in unlimited quantities.<br>
Any specific solution is not required to include every type of fruit.<br>
Determine all possible solutions for the given input.<br>
  Solution Format<br>
  - One line per solution. Each line is a comma-separated set of "quantity + name" pairs, describing how many units of each type of fruit to buy.
  - In each line, omit fruit with a quantity of zero.  Inflect the names for plural (adding an s is sufficient).<br><br>
  **Sample Input**<br>
    banana 32<br>
    kiwi 41<br>
    mango 97<br>
    papaya 254<br>
    pineapple 399<br><br>
  **Sample Output**<br>
  6 kiwis, 1 papaya<br>
  7 bananas, 2 kiwis, 2 mangos<br><br>
  **Challenge Input** (solve this case)<br>
  apple 59<br>
  banana 32<br>
  coconut 155<br>
  grapefruit 128<br>
  jackfruit 1100<br>
  kiwi 41<br>
  lemon 70<br>
  mango 97<br>
  orange 73<br>
  papaya 254<br>
  pear 37<br>
  pineapple 399<br>
  watermelon 500<br>
  **Note**: For this input, there are 180 solutions.
