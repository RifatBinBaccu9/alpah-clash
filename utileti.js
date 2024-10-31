function hiddenElementById(hiddenId){
    const AddHidden = document.getElementById(hiddenId);
    AddHidden.classList.add('hidden');
}

function hiddenRemoveById(removeId){
const removeHidden = document.getElementById(removeId);
removeHidden.classList.remove('hidden');
}

function showBgColor(elementId){
    const BgColorId = document.getElementById(elementId);
    BgColorId.classList.add('bg-orange-400');
}
function removeBgColor(elementId){
    const BgColorId = document.getElementById(elementId);
    BgColorId.classList.remove('bg-orange-400');
}
function getRandomeAlpabet(){
    const alpahbat = 'abcdefghijklmnopqrstwvxyz';
    const spliteAlpah = alpahbat.split('');

    const randomealp = Math.random() * 25;
    const index = Math.round(randomealp);

    const alpahbetsor = spliteAlpah[index];
    return alpahbetsor;
}

document.addEventListener('keyup', function keybordbuttonPrace(event){
    const playrprssKey = event.key;

    const expartAlp = document.getElementById('current-alphabet');
    const expartAlpValue = expartAlp.innerText;
    const expartValueLow = expartAlpValue.toLowerCase();

    if(playrprssKey === expartValueLow){
        continewGame();
        removeBgColor(expartValueLow)

        const curantScour = document.getElementById('score');
        const textCurantScour = curantScour.innerText;
        const convertScour = parseInt(textCurantScour);
        const scorSorted= convertScour + 1;

        curantScour.innerText = scorSorted;
    }else{
        const removelife = document.getElementById('life');
            const textLife = removelife.innerText;
            const convertInt = parseInt(textLife);
        if (convertInt > '1') {
            const removelife = document.getElementById('life');
            const textLife = removelife.innerText;
            const convertInt = parseInt(textLife);
            const removeinglife= convertInt - 1;
    
            removelife.innerText = removeinglife; 
        } else {
        console.log('hey')
        hiddenElementById('play-ground-section');

        hiddenRemoveById('score-section');

        const scour = document.getElementById('score');
        const allScour = scour.innerText;
        const viewScour = parseInt(allScour);

        const displayScour = document.getElementById('gain-score');
        displayScour.innerText = viewScour;
        }
    }
});
