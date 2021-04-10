let result;
var input = '';

const number = document.querySelectorAll('button.operand');
const operator = document.querySelectorAll('button.operator');
const equal = document.getElementById('btn-equals');
const backspace = document.getElementById('backspace-btn');
const clear = document.getElementById('reset-btn');
const operatorDisplay =  document.getElementById('operator-display');
const resultDisplay =  document.getElementById('result-display');


number.forEach( btn => {
  btn.addEventListener('click', ()=> {
    updateOperand(btn.innerText);
  });
});

operator.forEach( btn => {
  btn.addEventListener('click', ()=> {
    addOperator(btn.innerText);
  });
});

equal.addEventListener("click", ()=>{
  compute()
});

backspace.addEventListener("click", ()=>{
  deleteOne()
});

clear.addEventListener('click', ()=>{
  deleteAll()
});

function  updateOperand(value) {
  input = input + value.toString();
  display();
}

function addOperator(value) {
  input = eval(input) + value.toString();
  display();
}


function display(){
  // operatorDisplay.innerText = firstOperand + ' ' + selectedOperator + ' ' + secondOperand
  operatorDisplay.innerText = input;
}

function displayResult(){
  resultDisplay.innerText = result
}

function compute() {
  try {
    result = eval(input);
  }catch(error){
    result = 'Error'
  }

  displayResult();
}


function deleteOne() {
  input = input.slice(0, -1);
  display();
}

function deleteAll() {
  input = '';
  result = '';
  display();
  displayResult();
}
