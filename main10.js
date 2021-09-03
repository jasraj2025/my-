function wrong(){
    window.location="rong10.html"
}
function right(){

    window.location="lick10.html"
    Score3 = localStorage.getItem("score");
    Score3 =  Number(Score3) + 1;
    localStorage.setItem("score",Score3);
}


function finish(){
    window.location="finish.html"
}

