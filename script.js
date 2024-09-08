const calcCtn = document.querySelector('#calcCtn');

const allButtons = [
    [
        {
            content:"AC",
            operation:'all clear'
        },
        {
            content:"+/-",
            operation:'all clear'
        },
        {
            content:"%",
            operation:'all clear'
        },
        {
            content:"/",
            operation:'all clear'
        },
    ],
    [
        {
            content:"7",
            operation:'all clear'
        },
        {
            content:"8",
            operation:'all clear'
        },
        {
            content:"9",
            operation:'all clear'
        },
        {
            content:"*",
            operation:'all clear'
        },
    ],
    [
        {
            content:"4",
            operation:'all clear'
        },
        {
            content:"5",
            operation:'all clear'
        },
        {
            content:"6",
            operation:'all clear'
        },
        {
            content:"-",
            operation:'all clear'
        },
    ],
    [
        {
            content:"1",
            operation:'all clear'
        },
        {
            content:"2",
            operation:'all clear'
        },
        {
            content:"3",
            operation:'all clear'
        },
        {
            content:"+",
            operation:'all clear'
        },
    ],
]

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
        row.appendChild(button);
    }
    return row;
}

Grid();