// let success = false;
// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (success) {
//       resolve("Done!");
//     }
//     else {
//       reject("404");
//     }
//   }, 2000);
// });

// promise.then((result) => {
//   console.log("Finally Done!", result);
// }).catch((err) => {
//   console.log("Problem Occur", err);
// });

// console.log(promise);

// let success = false; 
// async function run() {
//   try {

//     let result = await new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (success) {
//           resolve("Done!");
//         } else {
//           reject("404");
//         }
//       }, 3000);
//     });

//     console.log(result);
//   } catch (err) {
//     console.log("Caught error:", err);
//   }
// }

// run();

function func1() {
  return new Promise(resolve=>{
    setTimeout(() => {
      resolve("Function 1 done!");
    }, 1500);
  });
}

function func2() {
  return new Promise(resolve=>{
    setTimeout(() => {
      resolve("Function 2 done!");
    }, 1000);
  });
}

function func3() {
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      // resolve("Function 3 done!");
      reject("error 404");
    }, 1500);
  });
}

async function runall() {
    // try {
      let result = await Promise.allSettled([func1(),func2(),func3()]);
      console.log(result);      
    // }
    //  catch (error) {
    //   console.error(error);
    // }
    // finally{
    //   console.log("Finally!");
    // }
}

runall();