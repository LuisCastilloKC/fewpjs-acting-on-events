// Your code here

let dodger = document.getElementById("dodger")
dodger.style.backgroundColor = "#FF69B4";
dodger.style.bottom = "0px"

function moveDodgerLeft(){
    let leftNumbers = dodger.style.left.replace("px", "")
    let left = parseInt(leftNumbers, 10);
    if (left > 0) {
        dodger.style.left = `${left - 1}px`
    }
}

function moveDodgerRight() {
    let leftNumbers = dodger.style.left.replace("px", "")
    let left = parseInt(leftNumbers, 10)
    if (left < 360 ) {
        dodger.style.left = `${left + 1}px`
    }
}

function moveDodgerUp(){
    let upNumbers = dodger.style.top.replace("px", "")
    let up = parseInt(upNumbers, 10)
    if (up <= 380){
        dodger.style.top = `${up - 1}px`
    }

}

document.addEventListener("keydown", function(event){
    if (event.key == "ArrowLeft"){
        moveDodgerLeft()
    }
    if (event.key == "ArrowRight"){
        moveDodgerRight()
    }
    if (event.key == "ArrowUp"){
        moveDodgerUp()
    }
})
