document.getElementById("btn-1").addEventListener("click",()=>{
    alert("you clicked btn 1");
});
document.getElementById("btn-2").addEventListener("click",()=>{
    alert("you clicked btn 2");
});
document.getElementById("btn-3").addEventListener("click",()=>{
    alert("you clicked btn 3");
});


let button1 = document.querySelector(".btn").firstElementChild;
let button2 = document.querySelector(".btn").lastElementChild;
// it will open in new window
button1.addEventListener("click",()=>{
    window.open("https://www.google.com","_blank");
    console.log("button1 pressed",);
})
//window.location.href = "url" ---> will open in same tab

button2.addEventListener("click",()=>{
    window.open("https://www.youtube.com","_blank");
    console.log("button2 pressed",);
})

// fectch content by using a certain div, its inner text and we can use setTimeInterval for tha that is already done in clock.html

// document.getElementById("toggleBtn").addEventListener("click",() =>{
//     document.getElementById("box").classList.toggle("red");
// });




