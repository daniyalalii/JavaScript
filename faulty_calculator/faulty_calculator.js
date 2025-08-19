console.log("======= Faulty Calculator======");
if(Math.random<0.50){
    function sum(a,b) {
        return a-b;
    }
    function diff(a,b){
        return a+b;
    }
    function mul(a,b){
        return a/b;
    }
    function div(a,b){
        return a*b;
    }
}
else{
    function sum(a,b) {
        return a+b;
    }
    function diff(a,b){
        return a-b;
    }
    function mul(a,b){
        return a*b;
    }
    function div(a,b){
        return a/b;
    }
}

console.log(sum(2,10));
console.log(mul(2,5));
console.log(diff(3,1));
console.log(div(10,2));