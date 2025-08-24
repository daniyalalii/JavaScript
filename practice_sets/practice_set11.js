// class complexNumbers {
//     constructor(real,imaginary) {
//         this.real = real;
//         this.imaginary = imaginary;
//     }
//     get result(){
//         console.log(`Answer: ${this.real} + ${this.imaginary}i`);
//     }
//     add(r1,i1,r2,i2){
//         this.real = r1+r2;
//         this.imaginary = i1+i2;
//     }
// }

// let c1 =  new complexNumbers(2,3);
// c1.result;
// c1.add(3,5,2,5);
// c1.result;

class human {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    get details(){
        console.log("Name: ",this.name);
        console.log("Age: ",this.age);
    }
}
class Student extends human{
    constructor(name,age,id,enrolled) {
        super(name,age)
        this.id = id;
        this.enrolled = enrolled;
    }
    get details(){
        console.log("Name: ",this.name);
        console.log("Age: ",this.age);
        console.log("id: ",this.id);
        console.log("Enrolled: ",this.enrolled);
    }
}
let h1 = new human("Dani", 19);
h1.details;
let s1 = new Student("Daniyal", 19, "24-28" ,"Yes" );
s1.details;
console.log(Student instanceof human); //false;
console.log(s1 instanceof human); //True;

