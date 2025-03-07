const num1Txt = document.getElementById("num1");
const num2Txt = document.getElementById("num2");
const txt1 = document.getElementById("sum");
const txt2 = document.getElementById("diff");
const txt3 = document.getElementById("prod");
const txt4 = document.getElementById("qou");
let sum = 0;
let diff = 0;
let prod = 0;
let qou = 0;

function calculate() {
    if(!(num1Txt.value === "" || num2Txt.value === "")) {
        
        sum = parseInt(num1Txt.value) + parseInt(num2Txt.value);
        txt1.innerHTML = sum;
        diff = parseInt(num1Txt.value) - parseInt(num2Txt.value);
        txt2.innerHTML = diff;
        prod = parseInt(num1Txt.value) * parseInt(num2Txt.value);
        txt3.innerHTML = prod;
        qou = parseInt(num1Txt.value) / parseInt(num2Txt.value);
        txt4.innerHTML = qou;
    }
}

function clearEntries() {
    num1Txt.value = "";
    num2Txt.value = "";
    resultTxt.innerHTML = "";
    sum = 0;

}