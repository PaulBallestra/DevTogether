let stringReverse
let stringPalindrome

const validateQ1Button = document.querySelector('.btnQ1')
const responseReverse = document.querySelector('.response-reverse')

const validateQ2Button = document.querySelector('.btnQ2')
const responsePalindrome = document.querySelector('.response-palindrome')

//OnClick Q1
validateQ1Button.addEventListener('click', () => {
    stringReverse = document.getElementById('string-reverse').value
    responseReverse.innerHTML = reverseString(stringReverse)
})

//OnClick Q2
validateQ2Button.addEventListener('click', () => {
    stringPalindrome = document.getElementById('string-palindrome').value
    responsePalindrome.innerHTML = isPalindrome(stringPalindrome)
})

//P1Q1 Function
function reverseString (strg){
    return strg.split("").reverse().join("")
}

//P1Q2 Function
function isPalindrome (strg){

    let reverse = reverseString(strg)
    let result = false

    if(strg == reverse)
        result = true
    else
        result = false

    return result
}