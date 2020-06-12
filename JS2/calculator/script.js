function result(num) {
    document.form.textview.value = document.form.textview.value + num;
}

function knopka_clear() {
    document.form.textview.value = "";
}

function knopka_ravno() {
    var exp = document.form.textview.value;
    if(exp) {
        document.form.textview.value = eval(exp);
    }
}

function random(){
	document.form.textview.value = Math.random()*10;
}

function exponentiationOne(){
    document.form.textview.value = parseInt(document.form.textview.value) 
}














exponentiation.addEventListener("click", exponentiationOne);

