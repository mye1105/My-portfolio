let score=parseInt(prompt('Enter the score:'));
if(score<60){
  console.log('Mark:F');

}
else if(score>=60 && score<70){
  console.log('Mark:D');
}
else if(score>=70 && score<80){
  console.log('Mark:C');
}
else if (score>=80 && score<90){
  console.log('Mark:B');
} else{
  console.log('Mark:A');
}