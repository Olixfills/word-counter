
// console.log(window.document);

let inputWords = document.getElementById('your-words');
let remainingWords = document.getElementById('remaining-chars');

let maxAllowedChars = inputWords.maxLength;

function wordCountDown(event) {
    let enteredText = event.target.value;
    
    let enteredTextLength = enteredText.length; 

    let remainingChars = maxAllowedChars - enteredTextLength;

    remainingWords.textContent = remainingChars;



}



inputWords.addEventListener('input', wordCountDown);