// Written by Mohan Goswami
// Email : workwithmohan@gmail.com

function enin(userin){
var uin = document.getElementsByTagName("input")[0].value;
var upd=uin+userin;
document.getElementsByTagName("input")[0].value=(upd);
}

function clearb(){
document.getElementsByTagName("input")[0].value="";
}

function solve(){
var calcScreen = document.getElementsByTagName("input")[0].value;
var upd = eval(calcScreen);
document.getElementsByTagName("input")[0].value=(upd);
}