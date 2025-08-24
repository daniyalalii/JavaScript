//promises api's

// let p1 = Promise.resolve("Hello");
// let p2 = Promise.resolve("Done!");
// let p3 = Promise.reject("error");

// Promise.all([p1, p2, p3])
//     .then((results)=>{
//         console.log(results);
// })
//     .catch((error) => {
//     console.log(error);
// });

// Promise.allSettled([p1,p2,p3]).then(
//     (results)=>{
//         results.forEach((result)=>{
//             if(result.status==="fulfilled"){
//                 console.log("Success", result.value);
//             }
//             else{
//                 console.log("Error", result.resolve);
//             }
//         });
//     }
// )

// let p1 = Promise.resolve("Hello");
// let p2 = Promise.resolve("Done!");
// let p3 = Promise.reject("Error");

// Promise.all([p1, p2, p3])
//     .then((results) => {
//         console.log(results);
//     })
//     .catch((error) => {
//         console.log(error); // Output: "Error"
//     });

// const promises = [
//     Promise.resolve("A"),
//     Promise.reject("B error"),
//     Promise.resolve("C"),
// ];

// Promise.allSettled(promises).then((results) => console.log(results));
