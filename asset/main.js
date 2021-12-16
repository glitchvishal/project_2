window.onscroll = function() {myfunction()};
function myFunction() {
    if (document.body.scrollTop > 50 || document.body.scrollTop > 50) {
        document.getElementById("home").className = "scroll";
    }else {
        document.getElementById("home").className = "";
    }
}

const menu = document.querySelectorAll('.menu')[0];
const toggle = document.querySelectorAll('.toggle')[0];
        

        function toggleMenu() {
            menu.classList.toggle('active');
            toggle.classList.toggle('active');
        };