 /*resume experiance read move read less work experiance*/

 function myFunction() {
    const moreText = document.getElementById("hide");
    const btnText = document.getElementById("myBtn");
    if (btnText.innerHTML === "Read less") {
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
};
/*resume menu button show*/

function navFunction() {
    var drop = document.getElementById("dropDownNav");
    if (drop.style.display == "none") {
        drop.style.display = "block";
    } else {
        drop.style.display = "none";
    }
}

window.onclick = function (event) {
    if (!event.target.matches('#dropdown_button')) {
        document.getElementById('dropDownNav').style.display = "none";
    }
}  