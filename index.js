function genaratePin(){
    const pickRandomValue = Math.floor(1000 + Math.random()*9000);
    document.getElementById('showGenaratePin').value = pickRandomValue;
}

let inputPin = document.getElementById('showInputPin');
const inputButton = document.getElementsByClassName('button');
let showInputNumber = '';

for(item of inputButton){
    item.addEventListener('click', function(number){
        const takeInput = number.target.innerText;
        if(takeInput == 'C'){
            showInputNumber = '';
            inputPin.value = showInputNumber;
        }
        else if(takeInput == '<'){
            showInputNumber = parseInt(showInputNumber/10);
            let newValue = showInputNumber;
            if(newValue != 0){
                inputPin.value = newValue;
            }
            else{
                inputPin.value = " ";
                showInputNumber = " ";
            }
        }
        else{
            showInputNumber += takeInput;
            inputPin.value = showInputNumber;
        }
    })
}

function compairPin(){
    const submissionLeft = document.getElementById('submitLeft').innerText;
    const newSubLeft = parseInt(submissionLeft);

    const newSubNumber = newSubLeft - 1;

    document.getElementById('submitLeft').innerText = newSubNumber;
    let newLeftCount = newSubNumber;

    console.log(newLeftCount);

    if(newLeftCount > 0){
        const getPin = document.getElementById('showGenaratePin').value;
        const userInputPin = document.getElementById('showInputPin').value;
     
        let doNotMatch = document.getElementById('dontMatch');
        let match = document.getElementById('match');
     
        if(getPin == userInputPin){
             match.style.display = 'block';
        }
        else{
             doNotMatch.style.display = 'block';
        }
    }
    else{
        document.getElementById('submit').disabled = true;
    }
}