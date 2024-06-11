

function sum(){
    var num1 =parseInt( document.getElementById('num1').value)
    var num2 =parseInt( document.getElementById('num2').value)
    var ans = num1+num2
    document.getElementById('ans').value = ans
}

function subtract(){
    var num1 =parseInt( document.getElementById('num1').value)
    var num2 =parseInt( document.getElementById('num2').value)
    var ans = num1-num2
    document.getElementById('ans').value = num1-num2
}

function multiply(){
    var num1 =parseInt( document.getElementById('num1').value)
    var num2 =parseInt( document.getElementById('num2').value)
    var ans = num1*num2
    document.getElementById('ans').value = num1*num2

}

function divide(){
    var num1 =parseInt( document.getElementById('num1').value)
    var num2 =parseInt( document.getElementById('num2').value)
    var ans = num1/num2
    document.getElementById('ans').value = num1/num2
}

function modulus(){
    var num1 =parseInt( document.getElementById('num1').value)
    var num2 =parseInt( document.getElementById('num2').value)
    ans = num1%num2
    document.getElementById('ans').value = ans
}