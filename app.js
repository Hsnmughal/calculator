function getNumber(num) {
    console.log(num);
    var result = document.getElementById("screen");
    result.value += num;
}
function clearScrn() {
    var result = document.getElementById("screen");
    result.value = "";
}
function getResult() {
    var result = document.getElementById("screen");
    result.value = eval(result.value);
}




























