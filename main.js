//1
function printArrayValues(arr, i = 0) {
    if (i < arr.length) {
      console.log(arr[i], 'array');
      printArrayValues(arr, i + 1);
    }
  }
  
  printArrayValues([1, 2, 3]);

//2
let arr = [4, 5, 6];
let newArr = [1, 2, 3].concat(arr);

for (let i = 7; i <= 10; i++) {
  newArr.push(i);
}

console.log(newArr);
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//3
let arr1 = [1, 2, 3, 4, 5];
let lastElement = arr1[arr1.length - 1];
console.log(lastElement);
console.log(arr1[4]);


//4
function countChar(str, char) {
    const regex = new RegExp(char, 'g');
    const matches = str.match(regex);
    return matches ? matches.length : 0;
}