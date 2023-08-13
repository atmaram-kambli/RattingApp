

// Rating - changing rate button color
const btn = document.querySelector(".rating");
let n;
let num = document.querySelector("#num");

function addButtonEffect(e) {
    let target = e.target;
    n = target.innerText;
    console.log(n);
    
    if(target.matches('button')) {
        for(let i=0; i<n; i++) {
            btn.children[i].style.backgroundColor = `hsl(28, 100%, 50%)`;
            btn.children[i].style.borderColor = `hsl(0, 100%, 100%)`;
        }
        for(let i=n; i<5; i++) {
            btn.children[i].style.backgroundColor = `hsl(215, 20%, 25%)`;
            btn.children[i].style.borderColor = `hsl(28, 100%, 90%)`;
        }
    }
}

btn.addEventListener('click', addButtonEffect);

const submit = document.querySelector(".submit");
const rateBox = document.querySelector(".first-box");
const thankBox = document.querySelector(".thank-box")

function showThankingMsg(e) {
    let target = e.target;
    if(target.matches('button')) {
        rateBox.classList.add("hidden");     
        thankBox.classList.remove("hidden");
        num.innerText = n;
    }
}
submit.addEventListener('click', showThankingMsg);
