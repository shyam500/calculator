const keypad = document.querySelector('#keypad');
const disp = document.querySelector('#inp');

const numArr = ['CE',1,2,3,4,5,6,7,8,9,0,'.','/','*','+','-','=']
numArr.forEach(i=>createKeys(i));

function createKeys(val){
    const key = document.createElement('div');
    key.className = 'btn';
    if(val === 'CE') key.classList.add('clear');
    else if(val === '=') key.classList.add('equal');
    key.textContent = val;
    keypad.appendChild(key);
};

keypad.addEventListener('click',e=>{
    if(e.target.classList.contains('btn'))clickFunc(e.target.textContent);
});


function clickFunc(e){
    if(e!=='=') disp.value += e; 
    if(e === '=')equalFunc(disp.value);
    if(e === 'CE')removeFunc(disp.value);

};


function equalFunc(val){
    disp.value = eval(String(val)).toFixed(3);
    console.log(eval(String(val)));

};


function removeFunc(val){
    disp.value = '';
}