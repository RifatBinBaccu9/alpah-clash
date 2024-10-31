function continewGame(){
    const alpahView= getRandomeAlpabet();
    const textView= document.getElementById('current-alphabet');
    textView.innerText=alpahView;
}

function play(){
     hiddenElementById('home-section');
     hiddenRemoveById('play-ground-section')
     continewGame();
};