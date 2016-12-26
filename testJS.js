var firstAnswer;
document.getElementById("resbut").onclick = function(){
   var secondAnswer;
   var thirdAnswer;
   var fourthAnswer = 0;
   var fiveAnswer = 0;
   var sumAnswer = 0;
   var percent = 0;
   var firstQuestion = document.getElementsByName('1v');
   for (var i = 0; i < firstQuestion.length; i++){
      if (document.getElementsByName('1v')[0].checked == true){
         firstAnswer = 10; 
      }
      else{
         firstAnswer = 0;
         }
      }
   var secondQuestion = document.getElementsByName('2v');
   for (var i = 0; i < secondQuestion.length; i++){
      if (document.getElementsByName('2v')[2].checked == true){
         secondAnswer = 10;
      }
      else{
         secondAnswer = 0;
         }
      }
   var thirdQuestion = document.getElementsByName('3v');
   for (var i = 0; i < thirdQuestion.length; i++){
      if (document.getElementsByName('3v')[3].checked == true){
         thirdAnswer = 10;
      }
      else{
         thirdAnswer = 0;
         }
      }
   var fourthQuestion = document.getElementsByName('4v');
   for (var i = 0; i < fourthQuestion.length; i++){
      if (document.getElementsByName('4v')[i].checked){
         if(i==1 && i==2){fourthAnswer += 10;}
         if(i==1 || i==2){fourthAnswer += 5;}
         if(i==3){fourthAnswer -= 5;}
         if(i==0){fourthAnswer -= 5;}
      } 
   }
   var fiveQuestion = document.getElementsByName('5v');
   for (var i = 0; i < fiveQuestion.length; i++){
      
      if (document.getElementsByName('5v')[i].checked){
         if(i==0 && i==1){fiveAnswer += 10; break;}
         if(i==0 || i==1){fiveAnswer += 5;}
         if(i==2){fiveAnswer -= 5;}
         if(i==3){fiveAnswer -= 5;}
         
      } 
   }
   sumAnswer = firstAnswer + secondAnswer + thirdAnswer + fourthAnswer + fiveAnswer;
   percent = (sumAnswer*100)/50;
   alert("Максимальное количество баллов: 50"+"\n"+"Вы прошли тест с оценкой: " + sumAnswer + " баллов"+"\n"+"Процент правильных ответов: "+percent+"%");
   
}
   
   

   
   
