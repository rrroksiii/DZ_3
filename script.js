var saveop;
var saveNumber;
var textBox = document.getElementById("display");
function addNum(number){
   textBox.value += number;
}
function btnClear(){
   saveop = 0;
   saveNumber = 0;
   document.forms.calculator.reset();
   textBox.style.color = "black";
   
}
function btnDot() {
   if (textBox.value.search(/\./) == -1) {
      textBox.value += ".";
   }
}
function operationConfirm(operation){
   saveNumber = textBox.value;
   saveop = operation;
   textBox.value = " ";  
}
document.getElementById("btn0").onclick = function(){
   addNum(0);
}
document.getElementById("btn1").onclick = function(){
   addNum(1);
}
document.getElementById("btn2").onclick = function(){
   addNum(2);
}
document.getElementById("btn3").onclick = function(){
   addNum(3);
}
document.getElementById("btn4").onclick = function(){
   addNum(4);
}
document.getElementById("btn5").onclick = function(){
   addNum(5);
}
document.getElementById("btn6").onclick = function(){
   addNum(6);
}
document.getElementById("btn7").onclick = function(){
   addNum(7);
}
document.getElementById("btn8").onclick = function(){
   addNum(8);
}
document.getElementById("btn9").onclick = function(){
   addNum(9);
}
document.getElementById("btnclear").onclick = btnClear;
document.getElementById("btndot").onclick = btnDot;
document.getElementById("btnplus").onclick = function(){
   operationConfirm("+");
}
document.getElementById("btnsub").onclick = function(){
   operationConfirm("-");
}
document.getElementById("btnmult").onclick = function(){
   operationConfirm("*");
}
document.getElementById("btndiv").onclick = function(){
   operationConfirm("/");
}
document.getElementById("btnplussub").onclick = function(){
   textBox.value *= -1;
}
document.getElementById("btnequal").onclick = function(){
   switch(saveop){
      case "+":
         textBox.value = +saveNumber + +textBox.value;
         break;
      case "-":
         textBox.value = saveNumber - textBox.value;
         break;
      case "*":
         textBox.value = +saveNumber * +textBox.value;
         break;
      case "/":
         if (textBox.value==0){
            textBox.value = "Делить на ноль нельзя!";
            textBox.style.color = "red"; 
         }
         else{
         textBox.value = +saveNumber / +textBox.value;
         }
         break; 
   }
}
   
















