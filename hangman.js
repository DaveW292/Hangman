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

function check(nr)
{
    var score = false;
    for(i=0; i<passLength; i++)
    {
        if(pass.charAt(i) == letters[nr])
        {
            hiddenPass = hiddenPass.setChar(i, letters[nr]);
            score = true;
        }
    }
    if(score == true)
    {
        yes.play();
        var element = "char" + nr;
        document.getElementById(element).style.background = "#003300";
        document.getElementById(element).style.color = "#00C000";
        document.getElementById(element).style.border = "3px solid #00C000";
        document.getElementById(element).style.cursor = "default";
        getPass();
    }
    else
    {
        no.play();
        var element = "char" + nr;
        document.getElementById(element).style.background = "#330000";
        document.getElementById(element).style.color = "#C00000";
        document.getElementById(element).style.border = "3px solid #C00000";
        document.getElementById(element).style.cursor = "default";
        document.getElementById(element).setAttribute("onclick",";");

        mistakes++;
        var picture = "img/p" + mistakes + ".jpg";
        document.getElementById("gallows").innerHTML = '<img src="'+ picture +'" alt=""/>';
    }

    if(pass == hiddenPass)
    document.getElementById("keyboard").innerHTML = "That's right :) " + pass + " is the correct password!" +
    '<br/><br/><span class="reset" onclick="location.reload()">PLAY AGAIN?</span>';

    if(mistakes>8)
    document.getElementById("keyboard").innerHTML = "Wrong :( " + pass + " is the correct password!" +
    '<br/><br/><span class="reset" onclick="location.reload()">PLAY AGAIN?</span>';
}