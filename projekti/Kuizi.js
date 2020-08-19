function check(){

var question1 = document.quiz.question1.value;
var question2 = document.quiz.question2.value;
var question3 = document.quiz.question3.value;
var question4 = document.quiz.question4.value;
var question5 = document.quiz.question5.value;
var question6 = document.quiz.question6.value;
var question7 = document.quiz.question7.value;
var question8 = document.quiz.question8.value;
var correct = 0;

if(question1 == "Mercury"){ correct++;}
if(question2 == "Uranus"){ correct++;}
if(question3 == "Jupiter"){ correct++;}
if(question4 == "Milky Way"){ correct++;}
if(question5 == "Mars"){ correct++;}
if(question6 == "Saturn"){ correct++;}
if(question7 == "Mars"){ correct++;}
if(question8 == "Jupiter"){ correct++;}

var messages = ["E P&euml;rsosur!!", "Pun&euml; e shk&euml;lqyer!", "&euml;sht&euml; n&euml; rregull", "Ju v&euml;rtet&euml; duhet t&euml; punoni m&euml; shum&euml;"];
var range;

if(correct<4)
{
	range = 3;
}
if(correct>3 && correct<6)
{
	range = 2;
}
if(correct>6 && correct<8)
{
	range = 1;
}

if(correct == 8)
{
	range = 0;
}




document.getElementById("after_submit").style.visibility = "visible";
document.getElementById("message").innerHTML = messages[range];
document.getElementById("number_correct").innerHTML = "Je p&euml;rgjigjur drejt&euml; n&euml; " + correct + " pyetje"


}