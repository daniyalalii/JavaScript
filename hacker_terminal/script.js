// const dots = document.querySelectorAll(".dots")
// let dotCount = 0;
// setInterval(() => {
//     dotCount = (dotCount + 1) % 4;
//     dots.forEach(dot => {
//         dot.textContent = '.'.repeat(dotCount);
//     })
// }, 500);

// const container = document.getElementById('container');
// setInterval(() => {
//     let p1 = document.createElement('p');
//     p1.innerHTML = 'initializing Hacking<span class="dots"></span>';
//     const dots = p.querySelector('.dots');
//     let count = 0;

//     setInterval(() => {
//         count = (count + 1) % 4;
//         dots.textContent = '.'.repeat(count);
//     }, 500)
//     container.appendChild(p1);
// }, 1000);


// setInterval(() => {
//     const p = document.createElement('p');
//     p.innerHTML = 'Initializing Hacking<span class="dots"></span>';
//     container.appendChild(p);
//     dot(p);
// }, 1000);

// setInterval(() => {
//     const p2 = document.createElement('p');
//     p2.innerHTML = 'Reading your files <span class="dots"></span>';
//     container.appendChild(p2);
//     dot(p2);
// }, 1500);


// setInterval(() => {
//     const p3 = document.createElement('p');
//     p3.innerHTML = 'Password files Detected <span class="dots"></span>';
//     container.appendChild(p3);
//     dot(p3);
// }, 2000);


// setInterval(() => {
//     const p4 = document.createElement('p');
//     p4.innerHTML = 'Sending all Passwords and Personal files to server <span class="dots"></span>';
//     container.appendChild(p4);
//     dot(p4);
// }, 2500);


// setInterval(() => {
//     const p5 = document.createElement('p');
//     p5.innerHTML = 'Cleaning up <span class="dots"></span>';
//     document.appendChild(p5);
//     dot(p5);
// }, 2500);

function dot(paragraph) {
    const dots = paragraph.querySelector('.dots');
    let count = 0;

    setInterval(() => {
        count = (count + 1) % 4;
        dots.textContent = '.'.repeat(count);
    }, 500);
}

const container = document.getElementById("container");

async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function StartHacking() {
    const messages = [
        "Initializing Hacking",
        "Reading your files",
        "Password files Detected",
        "Sending all Passwords and Personal files to server",
        "Cleaning up"
    ];

    for (let i = 0; i < messages.length; i++) {
        const p = document.createElement('p');
        p.innerHTML = `${messages[i]} <span class="dots"></span>`
        container.appendChild(p);
        dot(p);
        await delay(1500);
    }
}

StartHacking();




