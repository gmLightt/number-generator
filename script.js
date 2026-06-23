const generator = document.getElementById('generator');
const displayNum = document.getElementById('display');
const form = document.getElementById('myForm');
const endNumInput = document.getElementById('endNum');
const valueOutput = document.getElementById('values');
let randomNum = '';
let userData = '';

form.addEventListener('submit', function(event) {
  
  event.preventDefault();
  
  userData = endNumInput.value;
  valueOutput.textContent = `end value set to: ${userData}`;
});



generator.addEventListener('click', function() {
  let randomNum = Math.floor(Math.random() * userData) + 1;
  displayNum.innerHTML = 'Number: ' + randomNum;
  console.log('success!')
});