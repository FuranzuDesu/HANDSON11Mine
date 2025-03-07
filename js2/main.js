const txt1 = document.getElementById("txt1");
const txt2 = document.getElementById("txt2");
const txt3 = document.getElementById("txt3");
const fname = document.getElementById("fname");

function concatenate() {
    fname.innerHTML = txt1.value + " " + txt2.value + " " + txt3.value;
}

function clearEntries() {
    txt1.value = "";
    txt2.value = "";
    txt3.value = "";
    fname.innerHTML = "";
}