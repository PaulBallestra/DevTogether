let stringReverse

const validateQ1Button = document.querySelector('.btnValidate')
const responseReverse = document.querySelector('.response-reverse')

//OnClick Q1
validateQ1Button.addEventListener('click', () => {
    stringReverse = document.getElementById('string-reverse').value
    reverseString(stringReverse)
})

//P1Q1 Function
function reverseString (strg){

    var reverseStrg = strg.split("").reverse().join("")

    responseReverse.innerHTML = reverseStrg

}