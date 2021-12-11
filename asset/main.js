window.onscroll = function() {myfunction()};
function myFunction() {
    if (document.body.scrollTop > 50 || document.body.scrollTop > 50) {
        document.getElementById("home").className = "scroll";
    }else {
        document.getElementById("home").className = "";
    }
}