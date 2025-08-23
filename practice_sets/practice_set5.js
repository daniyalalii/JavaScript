// let arr = [1,2,3];
// let input= prompt("Enter a number");
// arr.push(input);
// console.log(arr);
// while(input!=0){
//     arr.push(input);
//     input = prompt("Enter a number");
// }
// console.log(arr);

// let arr = [1,2,10,15,20,30];
// let result = arr.filter(num=> num%10==0);
// console.log(result);

// let square = arr.map(num=> num*num);
// console.log(square)


let arr = [4,5,6];
number = arr[0];
let num = [];
for(let i=1;i<=number;i++){
    num.push(i);
}

let fac = num.reduce((pre,nxt)=>pre*nxt,1);
console.log(fac);
