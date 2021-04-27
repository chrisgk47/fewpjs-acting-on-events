// Your code here
let dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";

function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left - 20}px`;
    }
};

leftKey = document.addEventListener("keydown", function(e){
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    }
});

function moveDodgerRight(){
    let rightNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(rightNumbers, 10);

    if (left < 360) {
        dodger.style.left = `${left + 20}px`;
    }
};

rightKey = document.addEventListener("keydown", function(e){
    if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
});

