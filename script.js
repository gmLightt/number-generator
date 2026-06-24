const generator = document.getElementById('generator');
const displayNum = document.getElementById('display');
const form = document.getElementById('myForm');
const form2 = document.getElementById('myForm2');
const endNumInput = document.getElementById('endNum');
const startNumInput = document.getElementById('startNum');
const valueOutput = document.getElementById('values');
let randomNum = '';
let userEndNum = 1;
let userStartNum = 1;

valueOutput.style.whiteSpace = "pre-line";

form2.addEventListener('submit', function(event) {
  
  event.preventDefault();
  
  rawUserStartNum = startNumInput.value;
  userStartNum = Number(startNumInput.value);
  
  if (rawUserStartNum.trim() === "" || isNaN(userStartNum) || !Number.isInteger(userStartNum)) {
    valueOutput.textContent = 'put valid numbers plz </3'
  } else {
    valueOutput.textContent = `
    start = ${userStartNum}\nend = ${userEndNum}
  `;
  }
});

form.addEventListener('submit', function(event) {
  
  event.preventDefault();
  
  rawUserEndNum = endNumInput.value;
  userEndNum = Number(endNumInput.value);
  
  if (rawUserEndNum.trim() === "" || isNaN(userEndNum) || !Number.isInteger(userEndNum)) {
    valueOutput.textContent = 'put valid numbers plz </3'
  } else {
    valueOutput.textContent = `
    start = ${userStartNum}\nend = ${userEndNum}
  `;
  }
});



generator.addEventListener('click', function() {
  const rawStart = startNumInput.value;
  const rawEnd = endNumInput.value;
  
  if (userStartNum > userEndNum) {
  displayNum.innerHTML = 'Thats NOT how math works.';
  console.log('fail.')
  } else if (rawStart.trim() === '' &&  rawEnd.trim() === '') {
    const randomNum = 1
      displayNum.innerHTML = 'Number: ' + randomNum;
    console.log('empty.');
  } else {
    const randomNum = Math.floor(Math.random() * (userEndNum - userStartNum + 1)) + userStartNum;
      displayNum.innerHTML = 'Number: ' + randomNum;
      console.log('success!');
  }
});