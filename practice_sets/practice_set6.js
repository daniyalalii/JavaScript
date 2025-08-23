let age;
let repeat;
do {
    age = parseInt(prompt("Enter your age"));
    if(age<0){
        console.error("Error, Enter correct age");
    }
    // else if(age>4){
    //     location.href = "https://www.google.com";
    // }
    // else if(age>18){
    // alert("You can drive");}
    else if(age>18){
        alert("youhooo!");
        document.body.style.background = "linear-gradient(to right, red, yellow, green)";
    }
else{
    alert("You cannot drive");
}
    repeat = confirm("Do you want to see the message again?");

} while (repeat);

