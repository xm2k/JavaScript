let tmp = "";


function swap(){
    tmp = txt1.value;
    txt1.value = txt2.value;
    txt2.value = txt3.value;
    txt3.value = tmp;
    tmp = txt3.value;

}






btn.addEventListener("click", swap);





