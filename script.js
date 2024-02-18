const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");

checkButton.addEventListener("click", checkPalindrome);

function checkPalindrome() {
    const inputText = textInput.value.trim();
    
    if (inputText === "") {
        alert("Please input a value");
        return;
    }

    const isPalindromo = isPalindrome(inputText);
    
    resultDiv.textContent = `${inputText} ${isPalindromo ? "is" : "is not"} a palindrome`;
    resultDiv.style.display = "block";
}

function isPalindrome(text) {
    const stringWithoutNonAlphanumeric = text.replace(/[^a-zA-Z0-9]/g, ''); 
    const stringWithoutSpaces = stringWithoutNonAlphanumeric.toLowerCase();
    
    if (stringWithoutSpaces.length === 1) {
        return true;
    }

    const invertedString = stringWithoutSpaces.split('').reverse().join('');
    return stringWithoutSpaces === invertedString;
}
