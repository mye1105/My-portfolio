

/* const myDiv=document.getElementById('result');
const button = document.getElementById('submit');

button.addEventListener('click',enterNumber);

function enterNumber(){
  const numberValue=document.getElementById('n').value;
  console.log(numberValue);
  if(numberValue%2==0){
    myDiv.textContent='Even';

  } else {
    myDiv.textContent='odd';
  }
}
*/

function n(){
  const num=document.querySelector('.js-value').value;
  console.log(num);
if (num%2===0){
  const output=document.querySelector('.js-result');
  output.innerHTML='even'
} else{
  const output=document.querySelector('.js-result');
  output.innerHTML='odd'

}
}
