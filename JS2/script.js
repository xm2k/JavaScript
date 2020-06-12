let savedText = "";



function save(){
    savedText = txt.value; 
    txt.value = "";
}

function load(){
    result.innerHTML = savedText; 
}




sv.addEventListener("click", save);
ld.addEventListener("click", load);
