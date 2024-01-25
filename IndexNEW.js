
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var responsiveness = document.getElementById("myTopnav");
    if (responsiveness.className === "topnav") {
        responsiveness.className += " responsive";
    } else {
        responsiveness.className = "topnav";
    }
}