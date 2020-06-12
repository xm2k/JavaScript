

function plusOne(){
    result.innerHTML = parseInt(result.innerHTML) + 3
}

function minusOne(){
    result.innerHTML = parseInt(result.innerHTML) - 3
}

function multiplyOne(){
    result.innerHTML = parseInt(result.innerHTML) * 3
}

function divisionOne(){
    result.innerHTML = parseInt(result.innerHTML) / 3
}

function exponentiationOne(){
    result.innerHTML = parseInt(result.innerHTML) ** 3
}









pluaddEventListeners.("click", plusOne);
minus.addEventListener("click", minusOne);
multiply.addEventListener("click", multiplyOne);
division.addEventListener("click", divisionOne);
exponentiation.addEventListener("click", exponentiationOne);