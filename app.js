AOS.init({
    easing: 'ease-in-out-sine'
});

function toggleNav() {
    var sidebar = document.getElementById("main-sidebar");
    var main = document.getElementById("main");
    if (sidebar.style.width == "250px") {
        sidebar.style.width = "0px";
        main.style.marginLeft = "0px";
    }
    else {
        sidebar.style.width = "250px";
        main.style.marginLeft = "250px";
    }
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("main-sidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}