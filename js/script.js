
var k=0;

function setval(x) 
{
    var t=document.getElementById('_btn'+x).value
    if (t=='  ') 
    {
        if (k%2==0)
        {
            document.getElementById('_btn'+x).value="X";
        }
        else
        {
            document.getElementById('_btn'+x).value="O";
        }
        k++;
    }
    if (k==9) 
    {
        drow();
    }
    else
    {
        checkwin();

    }
}

    
function checkwin() {

    var bt1=document.getElementById('_btn1').value;
    var bt2=document.getElementById('_btn2').value;
    var bt3=document.getElementById('_btn3').value;
    var bt4=document.getElementById('_btn4').value;
    var bt5=document.getElementById('_btn5').value;
    var bt6=document.getElementById('_btn6').value;
    var bt7=document.getElementById('_btn7').value;
    var bt8=document.getElementById('_btn8').value;
    var bt9=document.getElementById('_btn9').value;

    win(bt1,bt2,bt3,"X");
    win(bt4,bt5,bt6,"X");
    win(bt7,bt8,bt9,"X");
    win(bt1,bt4,bt7,"X");
    win(bt2,bt5,bt8,"X");
    win(bt3,bt6,bt9,"X");
    win(bt1,bt5,bt9,"X");
    win(bt3,bt5,bt7,"X");

    win(bt1,bt2,bt3,"O");
    win(bt4,bt5,bt6,"O");
    win(bt7,bt8,bt9,"O");
    win(bt1,bt4,bt7,"O");
    win(bt2,bt5,bt8,"O");
    win(bt3,bt6,bt9,"O");
    win(bt1,bt5,bt9,"O");
    win(bt3,bt5,bt7,"O");

}
function win(v1,v2,v3,sign)
{
    if(v1==sign && v2==sign && v3==sign)
     {
         document.getElementById("player").innerHTML = sign
         showconfirmbox();

         document.getElementById("_btn1").disabled = true;
         document.getElementById("_btn2").disabled = true;
         document.getElementById("_btn3").disabled = true;
         document.getElementById("_btn4").disabled = true;
         document.getElementById("_btn5").disabled = true;
         document.getElementById("_btn6").disabled = true;
         document.getElementById("_btn7").disabled = true;
         document.getElementById("_btn8").disabled = true;
         document.getElementById("_btn9").disabled = true;
     }

}


function showconfirmbox() {

    document.getElementById("overlay").hidden = false
}
function drow() {

    document.getElementById("overlay2").hidden = false
}
function closeconfirmbox() {

    document.getElementById("overlay").hidden = true
    document.getElementById("overlay2").hidden = true
}
function isconfirm(ans) {
    
    if (ans)
    {
        location.reload();

    }
    else
    {
        closeconfirmbox();
    }
}



