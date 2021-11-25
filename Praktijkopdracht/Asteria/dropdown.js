// mobile dropdown


var drop = document.querySelector("#dropdownBtn");
var dropdown = document.querySelector("#dropdown");
drop.onclick =function(){
if (dropdown.style.display === "none") {
  dropdown.style.display = "block";
} else {
  dropdown.style.display = "none";
}
}