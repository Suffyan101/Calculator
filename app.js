var calinput = document.getElementById("cal-input");

function on_click(val) {
    if (val === '+' || val === '-' || val === '/' || val === '*') {
        var leth = document.getElementById("cal-input").value.length;
        var len = leth-1;
        console.log(len)
        if (len != "+" || len != "-" || len != "/" || len != "*") {
            calinput.value += val
            
        }
        else {
            // calinput.value -= val
            calinput.value[len] += val
        }
    }
    else{
        calinput.value += val
    }
}

function clearValue() {
    calinput.value = ""
}
function calcul() {
    calinput.value = eval(calinput.value)
}