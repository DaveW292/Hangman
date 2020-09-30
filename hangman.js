var pass = "A room without books is like a body without a soul";
pass = pass.toUpperCase();
var passLength = pass.length;
var hiddenPass = "";
var mistakes = 0;
var yes = new Audio("sounds/yes.mp3");
var no = new Audio("sounds/no.mp3");

for(i=0; i<passLength; i++)
{
    if(pass.charAt(i)==" ") hiddenPass = hiddenPass + " ";
    else hiddenPass = hiddenPass + "-";
}

function getPass()
{
    document.getElementById("board").innerHTML = hiddenPass;
}