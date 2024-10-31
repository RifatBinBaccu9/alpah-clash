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
        console.log('Prss right key');
    }else{
        console.log('Prss wrong key');
    }
});
