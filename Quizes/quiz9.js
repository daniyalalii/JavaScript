// function loadScript (src,callback){
//     let script = document.createElement('script');
//     script.src = src;
//     script.onload = function(){
//         callback(null,"Loaded");
//     };
//     script.onerror = function(){
//         callback(new Error("Failed"));
//     };
//     document.head.append(script);
// }

// loadScript("https://example.com/script.js", function (error, message) {
//     if (error) {
//         console.error(error);
//     } else {
//         console.log(message);
//     }
// });

//converting callback to promises

function loadScript(src){
    return new Promise((resolve,reject)=>{
        let script = document.createElement('script');
        script.src = src;
        script.onload = ()=>{
            resolve("Done");
        };
        script.onerror = ()=>{
            reject(new Error("Error"));
        };
    });
}

loadScript("https://example.com/script.js")
    .then((message) => {
        console.log(message);
    })
    .catch((err) => {
        console.error(err);
    });
