function continewGame(){
    const alpahView= getRandomeAlpabet();
    const textView= document.getElementById('current-alphabet');
    textView.innerText=alpahView;

    showBgColor(alpahView);
}

function play(){
     hiddenElementById('home-section');
     hiddenElementById('score-section');
     hiddenRemoveById('play-ground-section');
     continewGame();
     const setScore = document.getElementById('score');
     setScore.innerText= '0';
     const setLife = document.getElementById('life');
     setLife.innerText= '5';
};
