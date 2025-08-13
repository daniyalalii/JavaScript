function generate(a,b,c){
    let num = Math.floor(Math.random()*3);
    if(num==0) return a;
    else if(num==1) return b;
    else return c;
}
//adjectives
let a1 = "Crazy";
let a2 = "Room For";
let a3 = "Devil's";
//shop
let s1 = "Game";
let s2 = "Shoot";
let s3 = "FreeWare";

// other
let o1 = "Death";
let o2 = "Avengers";
let o3 = "EndGame";


console.log("===Random Name Generator===");
console.log(generate(a1,a2,a3),generate(s1,s2,s3),generate(o1,o2,o3));