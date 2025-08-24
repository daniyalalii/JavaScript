// (function run() {
//     setInterval((resolve) => {
//         console.log("hello\nworld");
//     }, 2000);
// })();


// function avg(...arr) {
//     let sum = arr.reduce((a,b)=>a+b,0);
//     return (sum)/(arr.length);
// }
// let arr = [1,2,4,5,6,7];
// let average = avg(...arr).toFixed(2);
// console.log(average);
// console.log(arr.length);

function CalculateInterest(p,r,t){
    return (p*r*t)/100;
}

console.log(CalculateInterest(1000,2000,300).toFixed(2));
