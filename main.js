Score = 0;


function wrong(){
    window.location="rong.html"
}
function right(){
    window.location="lick.html"
    Score1 = localStorage.getItem("score");
    Score1 =  Number(Score1) + 1;
localStorage.setItem("score",Score1);  
}

function next(){
    window.location="index2.html"
}


