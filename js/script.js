let ruleBtn = document.getElementById("rules");
let closeBtn = document.getElementById("close");
let ruleBox = document.getElementById("ruleBox");
let blackScreen = document.getElementById("blackBag");

ruleBtn.addEventListener('click', function () {
    ruleBox.classList.add('block');
    blackScreen.classList.add('block');
    console.log("Box is block");
});
closeBtn.addEventListener('click', function () {
    ruleBox.classList.remove('block');
    blackScreen.classList.remove('block');
    console.log("Box is hidden");
});