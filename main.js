/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function navbar() {
  var x = document.getElementById("navbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}

/* To Allow Dropdown Contents to stick to the navigation bar  */
function dropdownPos() {
  var navPos = document.getElementById("navbar").getBoundingClientRect();
  var navBottom = navPos.bottom;

  document.getElementById("navlatest").style.top = navBottom + "px";
  document.getElementById("navabout").style.top = navBottom + "px";
  document.getElementById("navregulations").style.top = navBottom + "px";
  document.getElementById("navjoin").style.top = navBottom + "px";
}
