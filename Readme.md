# JavaScript Array Iteration Methods

JavaScript provides several methods for iterating over arrays. These methods allow you to manipulate, filter, and transform array elements efficiently.

## 1. `forEach()`
Executes a provided function once for each array element.

### Syntax:
```js
array.forEach((element, index, array) => {
    // Code to execute for each element
});
```

### Example:
```js
let numbers = [1, 2, 3, 4];
numbers.forEach(num => console.log(num * 2));
```
**Output:**
```
2
4
6
8
```

## 2. `map()`
Creates a new array by applying a function to each element.

### Syntax:
```js
let newArray = array.map((element, index, array) => {
    return transformedElement;
});
```

### Example:
```js
let numbers = [1, 2, 3, 4];
let doubled = numbers.map(num => num * 2);
console.log(doubled);
```
**Output:**
```
[2, 4, 6, 8]
```

## 3. `filter()`
Creates a new array with elements that satisfy a condition.

### Example:
```js
let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);
```
**Output:**
```
[2, 4]
```

## 4. `reduce()`
Reduces an array to a single value by applying a function.

### Example:
```js
let numbers = [1, 2, 3, 4];
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);
```
**Output:**
```
10
```

## 5. `every()`
Checks if all elements satisfy a condition.

### Example:
```js
let numbers = [2, 4, 6, 8];
let allEven = numbers.every(num => num % 2 === 0);
console.log(allEven);
```
**Output:**
```
true
```

## 6. `some()`
Checks if at least one element satisfies a condition.

### Example:
```js
let numbers = [1, 3, 5, 8];
let hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven);
```
**Output:**
```
true
```

## 7. `find()`
Returns the first element that satisfies a condition.

### Example:
```js
let numbers = [3, 7, 10, 15];
let firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven);
```
**Output:**
```
10
```

## 8. `findIndex()`
Returns the index of the first element that satisfies a condition.

### Example:
```js
let numbers = [3, 7, 10, 15];
let firstEvenIndex = numbers.findIndex(num => num % 2 === 0);
console.log(firstEvenIndex);
```
**Output:**
```
2
```

## 9. `sort()`
Sorts an array in place (modifies the original array).

### Example:
```js
let numbers = [5, 2, 8, 1];
numbers.sort((a, b) => a - b);
console.log(numbers);
```
**Output:**
```
[1, 2, 5, 8]
```

## 10. `reverse()`
Reverses an array in place.

### Example:
```js
let numbers = [1, 2, 3, 4];
numbers.reverse();
console.log(numbers);
```
**Output:**
```
[4, 3, 2, 1]
```

## 11. `for...of` Loop
A simple way to iterate over array elements.

### Example:
```js
let numbers = [1, 2, 3];
for (let num of numbers) {
    console.log(num);
}
```
**Output:**
```
1
2
3
```

## Conclusion
JavaScript provides multiple ways to iterate over arrays.

### [Practice examples](https://annwanjiku.github.io/JSarrays/)
