let numbers = [1, 2, 3, 4]
let arr =[]
let index 

arrayLength = (arr) => {
    return arr.length
};


addAtBeginning = (arr,index) => {
      arr.unshift(index)
};
addElement = (arr,index) => {
      arr.push(index)
};


addAtBeginning(numbers,9);
let count = arrayLength(numbers)
console.log(" The number of elements is: ")
console .log (count);
console.log(" Array After adding an element at the beginning of it: ")
console .log (numbers);

