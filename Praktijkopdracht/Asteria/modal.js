var modal = document.querySelector("#myModal");

var link = document.querySelectorAll(".link");
for (var i = 0; i < link.length; i++) {
    var linkClick= link[i];
    linkClick.onclick = function () {
      modal.style.display = "block";
    };
}

var span = document.querySelectorAll(".close")[0];
span.onclick = function() {
  modal.style.display = "none";
  modframe.location.href='about: blank';
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    modframe.location.href='about: blank';
  }
}

