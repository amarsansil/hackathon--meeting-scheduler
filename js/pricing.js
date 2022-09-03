var ques1 = document.getElementById("ques1")
var ques2 = document.getElementById("ques2")
var ques3 = document.getElementById("ques3")
var ques4 = document.getElementById("ques4")
var ques5 = document.getElementById("ques5")
var ques6 = document.getElementById("ques6")


var count = 0

function getsign() {

    count++
    let pritripara = document.getElementById("pri-tripara")
    ques1.textContent = '-'
    pritripara.hidden = false
    if (count % 2 == 0) {
        ques1.textContent = "+"
        pritripara.hidden = true
    }
}

function getsign1() {

    count++
    let pritripara1 = document.getElementById("pri-tripara1")
    ques2.textContent = '-'
    pritripara1.hidden = false
    if (count % 2 == 0) {
        ques2.textContent = "+"
        pritripara1.hidden = true
    }
}

function getsign2() {

    count++
    let pritripara2 = document.getElementById("pri-tripara2")
    ques3.textContent = '-'
    pritripara2.hidden = false
    if (count % 2 == 0) {
        ques3.textContent = "+"
        pritripara2.hidden = true
    }
}

function getsign3() {

    count++
    let pritripara3 = document.getElementById("pri-tripara3")
    ques4.textContent = '-'
    pritripara3.hidden = false
    if (count % 2 == 0) {
        ques4.textContent = "+"
        pritripara3.hidden = true
    }
}

function getsign4() {
    count++
    let pritripara4 = document.getElementById("pri-tripara4")
    ques5.textContent = '-'
    pritripara4.hidden = false
    if (count % 2 == 0) {
        ques5.textContent = "+"
        pritripara4.hidden = true
    }
}

function getsign5() {
    count++
    let pritripara5 = document.getElementById("pri-tripara5")
    ques6.textContent = '-'
    pritripara5.hidden = false
    if (count % 2 == 0) {
        ques6.textContent = "+"
        pritripara5.hidden = true
    }
}




ques1.addEventListener("click", getsign)
ques2.addEventListener("click", getsign1)
ques3.addEventListener("click", getsign2)
ques4.addEventListener("click", getsign3)
ques5.addEventListener("click", getsign4)
ques6.addEventListener("click", getsign5)





// script for sticky header

// script for sticky header

// When the user scrolls the page, execute myFunction
// window.onscroll = function () { myFunction() };

// // Get the header
// var header = document.getElementById("layout");

// // Get the offset position of the navbar
// var sticky = header.offsetTop;

// // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//     if (window.pageYOffset > sticky) {
//         header.classList.add("sticky");
//     } else {
//         header.classList.remove("sticky");
//     }
// }