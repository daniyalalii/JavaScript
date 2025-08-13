// let age = 13;
// console.log(age>10 &&age<20);

// switch (age) {
//     case 10:
//         console.log("age is 10");
//         break;
//     case 12:
//         console.log("age lies between 12 and 15");
//         break;
//     default:
//         console.log("age is not confirmed");
//         break;
// }

// let n = (age/3==0)?true:false; //return bool
// console.log("Checking age divisble by 3: ", n);

// let m = (age/5==0)?"true":"false";  // return string
// console.log("Checking age divisble by 5: ", m);

// let n = ((10%2==0) || 10%3==0)?true:false;
// console.log(n);

let input = prompt("Enter a numner");
if(input>18){
    console.log("You can drive");
}
else{
    console.log("You cannot drive");
}