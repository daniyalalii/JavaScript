// const marks = {
//     English : 69,
//     Math : 87,
//     Urdu : 67,
//     Biology : 80,
//     Chemistry : 87
// }

// for(let [key,value] of Object.entries(marks)){
//     console.log(`${key}: ${value}`);
// }

// for (const key in marks) {
//     console.log(key);
// }
// let sum = 0;
// for(let subject in marks){
//     console.log(`${subject}: ${marks[subject]}`)
//     sum+=marks[subject];
// }
// let mean = sum/5;
// console.log(mean);
// let num;
// do {
//     num = prompt("Enter a number");
//     console.log("Try again");
// } while (num!=20);

function mean(n1,n2,n3,n4,n5) {
    return (n1+n2+n3+n4+n5)/5;
}
console.log(mean(1,2,3,4,5))
