var calinput= document.getElementById("cal-input");

function on_click(val){
    // if(calinput.value === "")
    calinput.value += val
}
function clearValue(){
    calinput.value = ""
}
function calcul(){
    calinput.value = eval(calinput.value)
}