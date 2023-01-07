function numButton(a){
    let inp = document.getElementById('inp');
    inp.value = inp.value + a.value;
}


function barobar(){
    let r = document.getElementById('inp');
    r.value = eval(r.value);
}

function reset(){
    let res = document.getElementById('inp');
    res.value = "";
}

