

let list=["tell","hello","read","abaft","foe","introduce","welcome","sit","spray","sprinkle","walk","stand","sleep","run","none","camp","browse","drowsy","serene","pristine","outdoor","oxen","pink","red","blue","mugup","glass","paper","time","clock","sweep","dung","owl","photo","watch","movie","tour","mouse","click","cap","make","climb","light","fan","cook","press","gone","game","play","dream","bad","brave","sharp","wisdom","fly","bird","parrot","squirrel","rat","crow","goat","cow","lion","tiger","forest","cloud","sky","star","moon","sun","earth","mars","april","march","august","phone","friday","one","two","four","key","round","circle","oval","egg","shout"];
let c=0;
let i=2;
function result(c){
    if(c==5)
     {
        document.getElementById("playagain").innerHTML="<h1 id=\"won\">You won🥳</h1><br><a href=first.html><button id=\"pbtn\">Play again</button></a>"
    }
else{
   document.getElementById("playagain").innerHTML="<h1 id=\"lose\">You lose😔</h1><br><a href=first.html><button id=\"pbtn\">Play again</button></a>"
}

}
let s=""
let k=0;
function mine(){
    let ram=Math.floor(Math.random()*85);
let str="";
s=list[ram];
for(let i=0;i<list[ram].length;i++){
    if(i%2==0)
    str=str+s[i];
}
for(let i=0;i<list[ram].length;i++){
    if(i%2!=0)
    str=str+s[i];
   //document.getElementById("word").textContent=str;
    console.log("clicked")
}
return str;
list.delete[ram];
}
let win=1;
document.getElementById("word").textContent=mine();
function check(){
    if(i==6){
        result(win);
    }
    document.getElementById("count").textContent=i++;
    console.log("i : "+(i))
    let m=document.getElementById("ans").value
    console.log("ans : "+s)
    console.log("input : "+m)
    if(m==s){
        console.log("win : "+win)
        document.getElementById("output").innerHTML="<h2 id=\"correct\">correct</h2>";
       win++;
    }
    else
    document.getElementById("output").innerHTML="<h2 id=\"incorrect\">Incorrect</h2>";

    document.getElementById("word").textContent=mine();
    document.getElementById("text").innerHTML="<input type=\"text\" name=\"Input\" id=\"ans\"></input>"

}