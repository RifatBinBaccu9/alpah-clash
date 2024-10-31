function hiddenElementById(hiddenId){
    const AddHidden = document.getElementById(hiddenId);
    AddHidden.classList.add('hidden');
}

function hiddenRemoveById(removeId){
const removeHidden = document.getElementById(removeId);
removeHidden.classList.remove('hidden');
}

function getRandomeAlpabet(){
    const alpahbat = 'abcdefghijklmnopqrstwvxyz';
    const spliteAlpah = alpahbat.split('');

    const randomealp = Math.random() * 25;
    const index = Math.round(randomealp);

    const alpahbetsor = spliteAlpah[index];
    return alpahbetsor;
}