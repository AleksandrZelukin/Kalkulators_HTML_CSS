let a = ''; //pirmais skaitlis
let b = ''; //otrais skaitlis
let sign = ''; //matemat operacija
let finish = false;

const digit = ['0','1','2','3','4','5','6','7','8','9','.'];
const action = ['-','+','X','/'];


const out = document.querySelector('.calc-screen p');

function clearALL () {
    a = '';
    b = '';
    sign = '';
    finish = false;
    out.textContent = 0;
}

document.querySelector('.ac').oncick = clearALL;

document.querySelector('.ac').oncick = (event) => {
    if(!event.target.classList.contains('btn')) return;
    if(event.target.classList.contains('ac')) return;

    out.textContent = '';
    const key = event.target.textContent;

    if (digit.includes(key)) {
        a+=key;
        console.log(a, b, sign)
    }
}