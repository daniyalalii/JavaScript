let colors = ["black","yellow","cyan","grey","purple","pink"];
let size = colors.length;
let box = document.querySelectorAll(".box");

box.forEach(e=>{
    let random = Math.floor(Math.random()*size);
    e.style.color = colors[random];
})
box.forEach(e=>{
    let random = Math.floor(Math.random()*size);
    e.style.backgroundColor = colors[random];
})