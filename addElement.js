let numbers = [1, 2, 3, 4]
let arr =[]
let index 

arrayLength = (arr) => {
    return arr.length
};


addElement = (arr,index) => {
      arr.push(index)
};


addElement(numbers,8);
let count = arrayLength(numbers)
console.log(" The number of elements is: ")
console .log (count);
console.log(" Array After adding an element at the end of it: ")
console .log (numbers);