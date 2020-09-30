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

var letters = new Array(26);
letters[0] = "Q";
letters[1] = "W";
letters[2] = "E";
letters[3] = "R";
letters[4] = "T";
letters[5] = "Y";
letters[6] = "U";
letters[7] = "I";
letters[8] = "O";
letters[9] = "P";
letters[10] = "A";
letters[11] = "S";
letters[12] = "D";
letters[13] = "F";
letters[14] = "G";
letters[15] = "H";
letters[16] = "J";
letters[17] = "K";
letters[18] = "L";
letters[19] = "Z";
letters[20] = "X";
letters[21] = "C";
letters[22] = "V";
letters[23] = "B";
letters[24] = "N";
letters[25] = "M";

function start()
{
    var content = "";
    for(i=0; i<26; i++)
    {
        var element = "char" + i;
        content = content + '<div class="letter" onclick="check('+ i +')" id="'+ element +'">' + letters[i] + '</div>';
        if(i==9) content = content + '<div style="clear:both;"></div>';
        if(i==18) content = content + '<div style="clear:both;"></div>';
    }
    document.getElementById("keyboard").innerHTML = content;
    getPass();
}
window.onload = start;

String.prototype.setChar = function(place, char)
{
    if(place > this.length - 1) return this.toString();
    else return this.substr(0, place) + char + this.substr(place + 1);
}