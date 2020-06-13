// // Array Concepts 

// const myArray = [1,2,3,4,5];

// // map();

// myArray2 = myArray.map(
//     ele => ele+5
// )
// // increments each value of array by 5 

// myArray3 = myArray.map(()=>"neeraj");
// // returns arrays with 5 times neeraj element 

// console.log(myArray);
// console.log(myArray2);
// console.log(myArray3);

// filter();

// const myArray = [1,3,5,7,9];

// myArray2 = myArray.filter(el=>el > 4 );
// // filter returns value based on condition 
// console.log(myArray2);

// myArray2 = myArray.filter(el=>true);
// console.log(myArray2);


// includes();

const myArray = [1,2,3,4,5];

// console.log(myArray.includes(2));

console.log(myArray.includes(2, 3));
// checks whether contains 2 from 3rd indexedDB, returns false 


const newArray = [{id: 1},{id: 2},{id: 3}];
console.log(newArray[1]);
console.log(newArray.includes({id: 1}));
// returns false :( 
const o1 = {id: 1};
const o2 = {id: 2};
const o3 = {id: 3};
const newArray2 = [o1, o2, o3];
console.log(newArray2);
console.log(newArray2.includes(o1));
 
console.log("***");


const obj1 = {id: 1};

const obj2 = {id: 1};

console.log(obj1 === obj2);
console.log(obj1 == obj2);
// returns false as they point to diffrnt locations, everything except primitive point to diff locations , evrything excpt are objects 

const obj3 = obj2;
console.log(obj3===obj2);
// returns true, due to assignment change 

obj2.id = 18;
console.log(obj2);
console.log(obj3);
// both 18 , changing one of value gets affected in both 




// reduce();

// find();



