function wrong(){
    window.location="rong8.html"
}
function right(){

    window.location="lick8.html"
    Score3 = localStorage.getItem("score");
    Score3 =  Number(Score3) + 1;
    localStorage.setItem("score",Score3);
}
function finish(){
    window.location="index9.html"
}

