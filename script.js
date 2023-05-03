let myButton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
}


//when clicked, scroll to the top of the document.

function topFunction() {
    document.body.scrollTop = 0; //Safari
    document.documentElement.scrollTop = 0; //Chrome, Firefox, IE, Opera
}