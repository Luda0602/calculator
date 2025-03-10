let a = '';//first number
let b = '';//second number
let sign = '';//знак операції
let finish = false;

const digit = ['0','1','2','3','4','5','6','7','8','9','.'];
const action = ['-','+','X','/'];
//екран
const out = document.querySelector('.calc-screen p');

function clearAll () {
    a = '';//first number and result
    b = '';//second number 
    sign = '';//знак
    finish = false;
    out.textContent = 0;
}
document.querySelector('.ac').onclick = clearAll;
document.querySelector('.buttons').onclick = (event) => {
    //нажата не кнопка
    if(!event.target.classList.contains('btn'))return;
   //нажата копка clearAll
    if(event.target.classList.contains('ac'))return;
    out.textContent = '';
    //отримую нажату кнопку
    const key = event.target.textContent;

    //Якщо нажата клавіша 0-9 чи .
    if(digit.includes(key)) {
    a+=key;
    console.log(a, b, sign);
    out.textContent = a;
    }
    //якщо нажато + - / *
    if (action.includes(key)) {
        sign = key;
        out.textContent = sign;
        console.log( a, b, sign);
        return;
    }

    //нажата = 
    if (key === '=') {
        if (b === '') b = a;
        switch (sign) {
            case "+":
                a = (+a) + (+b);
                break;
            case "-":
                a = a - b;
                break;
             case "X":
                a = a * b;
                break;
            case "-":
                a = a / b;
                if (b === '0') {
                    out.textContent = 'Помилка';
                    a = '';
                    return;
                }
                a = a / b;
                break;
        }
        finish = true;
        out.textContent = a;
        console.table(a, b, sign);
    }
}