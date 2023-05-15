let increase=document.getElementById('increase');
increase.addEventListener('click',showMsg);
let number=document.getElementById('num').innerHTML;
function showMsg()
{
number++;
document.getElementById('num').innerHTML=number;
}
let decrease=document.getElementById('decrease');
decrease.addEventListener('click',show);
function show()
{
    number--;
    document.getElementById('num').innerHTML=number;
}
let repeat=document.getElementById('reset');
repeat.addEventListener('click',s)
function s()
{
    document.getElementById('num').innerHTML=0;
}