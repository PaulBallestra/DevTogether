let stringReverse
let stringPalindrome
let stringMostCommon

const validateQ1Button = document.querySelector('.btnQ1')
const responseReverse = document.querySelector('.response-reverse')

const validateQ2Button = document.querySelector('.btnQ2')
const responsePalindrome = document.querySelector('.response-palindrome')

const validateQ3Button = document.querySelector('.btnQ3')
const responseMostCommon = document.querySelector('.response-mostcommon')

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

//OnClick Q3
validateQ3Button.addEventListener('click', () => {
    stringMostCommon = document.getElementById('string-mostcommon').value
    responseMostCommon.innerHTML = printMostComChar(stringMostCommon)
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

//P1Q3 Function
function printMostComChar (strg){

    var letterMostCommon
    var letterNumber = 0

    let numberOfLetters = [...strg].reduce((a, e) => { a[e] = a[e] ? a[e] + 1 : 1; return a }, {})

    for(let letter in numberOfLetters){

        if(numberOfLetters[letter] >= letterNumber){
            letterMostCommon = letter
            letterNumber = numberOfLetters[letter]
        }
    }

    return letterMostCommon
}