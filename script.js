const calcCtn = document.querySelector('#calcCtn');

const output = document.querySelector('#output');

const snarky = document.querySelector('#snarky');
snarky.style.color = 'red';
snarky.style.textAlign = 'center';
snarky.style.fontSize = '18px';
snarky.style.marginBottom = '16px';


let operationStack = [];
function operationClick(operation){
    if(output.textContent === '0'){
        return;
    } else if(operationStack.length > 0){
        evaluateString(output.textContent);
    } else {
        operationStack.push(operation);
        output.textContent += operation;
    }
}

function numberClick(number){
    if(output.textContent === "0"){
        output.textContent = number;
    } else {
        output.textContent += number;
    }
}

function pointClick(){
    let temp = output.textContent.split("");
    if(temp.includes('.')){
        return;
    } else {
        output.textContent += '.';
    }
}
// Operations 
function divide(a,b){
    if(b === 0){
        snarky.textContent = "Nice Try! :||";
        b = 1;
    }
    let temp = a / b;
    let result = Number(temp.toFixed(2));
    return result;
}
function multiply(a,b){
    let temp = a * b;
    return temp;
}
function subtract(a,b){
    let temp = a - b;
    return temp;
}

function add(a,b){
    let temp = a + b;
    return temp;
}

function negative(){
    let temp = output.textContent;
    temp = temp.split("");
    if(temp[0] === '-'){
        temp.shift();
    } else {
        temp.unshift('-');
    }
    temp = temp.join("");
    output.textContent = temp;
}

function percentage(){
    let temp = Number(output.textContent);
    temp /= 100;
    output.textContent = temp;
}

function evaluateString(input){
    let ops = operationStack.pop();
    let separate = input.split(ops);
    let a = Number(separate[0]);
    let b = Number(separate[1]);
    let result = 0;
    switch (ops) {
        case '+':
            result = add(a,b);
            break;
        case '-':
            result = subtract(a,b);
            break;
        case '*':
            result = multiply(a,b);
            break;
        case '/':
            result = divide(a,b);
            break;
        default:
            console.log(result);
    }
    output.textContent = result;
}

const allButtons = [
    [
        {
            content:"AC",
            operation: function() {
                output.textContent = '0';
            },
            backgroundColor: 'orange'
        },
        {
            content:"+/-",
            operation: () => negative(),
            backgroundColor: 'orange'
        },
        {
            content:"%",
            operation: () => percentage(),
            backgroundColor: 'orange'
        },
        {
            content:"/",
            operation: () => operationClick('/'),
            backgroundColor:'lightblue',
        },
    ],
    [
        {
            content:"7",
            operation: () => numberClick(7),
            backgroundColor:'white',
        },
        {
            content:"8",
            operation: () => numberClick(8),
            backgroundColor:'white',
        },
        {
            content:"9",
            operation: () => numberClick(9),
            backgroundColor:'white',
        },
        {
            content:"*",
            operation: () => operationClick("*"),
            backgroundColor:'lightblue',
        },
    ],
    [
        {
            content:"4",
            operation: () => numberClick(4),
            backgroundColor:'white',
        },
        {
            content:"5",
            operation: () => numberClick(5),
            backgroundColor:'white',
        },
        {
            content:"6",
            operation: () => numberClick(6),
            backgroundColor:'white',
        },
        {
            content:"-",
            operation: () => operationClick("-"),
            backgroundColor:'lightblue',
        },
    ],
    [
        {
            content:"1",
            operation: () => numberClick(1),
            backgroundColor:'white',
        },
        {
            content:"2",
            operation: () => numberClick(2),
            backgroundColor:'white',
        },
        {
            content:"3",
            operation: () => numberClick(3),
            backgroundColor:'white',
        },
        {
            content:"+",
            operation: () => operationClick("+"),
            backgroundColor:'lightblue',
        },
    ],
    [
        {
            content:'0',
            operation: () => numberClick(0),
            backgroundColor:'white',
        },
        {
            content:'.',
            operation: () => pointClick("."),
            backgroundColor:'white',
        },
        {
            content:'=',
            operation: () => evaluateString(output.textContent),
            backgroundColor:'pink',
        }
    ]
]

const numbers = [0,1,2,3,4,5,6,7,8,9]

const operations = ['+','-','*','/'];

output.addEventListener('keydown',(e) => {
    if(numbers.includes(Number(e.key))){
        numberClick(e.key);
    } else if(operations.includes(e.key) && e.key === "="){
        evaluateString(output.textContent);
    } else {
        operationClick(e.key);
    }
})

function Grid(){
    for(let i=0;i<allButtons.length;i++){
        calcCtn.appendChild(Rows(allButtons[i]));
    }
}


function Rows(buttonArr){
    const row = document.createElement('div');
    row.classList.add('row');
    for(let i=0;i<buttonArr.length;i++){
        const button = document.createElement('button');
        button.textContent = buttonArr[i].content;
        button.style.backgroundColor = buttonArr[i].backgroundColor;
        button.addEventListener('click',(e) => {
            buttonArr[i].operation();
        });
        row.appendChild(button);
    }
    return row;
}

Grid();