/* global bootstrap: false */
(function () {
  "use strict";
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  tooltipTriggerList.forEach(function (tooltipTriggerEl) {
    new bootstrap.Tooltip(tooltipTriggerEl);
  });
})();

// function makeActive(abc) {
//   var element = document.getElementById("wordlist");
//   var act = document.getElementsByClassName("active");
//   for (var i = 0; i < act.length; i++) {
//     act[i].classList.remove("active");
//   }
//   abc.classList.add("active");
// }
