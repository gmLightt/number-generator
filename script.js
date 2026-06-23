const generator = document.getElementById('generator');
const displayNum = document.getElementById('display');
let randomNum = ''

generator.addEventListener('click', function() {
  let randomNum = Math.floor(Math.random() * 100) + 1;
  displayNum.innerHTML = 'Number: ' + randomNum;
  console.log('success!')
});