(function () {
  "use strict";

  var ouvre = document.querySelectorAll('.imgBox2');

  function gestClick() {
    console.log(this);
    this.classList.toggle("actif2");
  }

  for (var i = 0; i < ouvre.length; i++) {
    var ouverture = ouvre[i];
    ouverture.addEventListener("click",gestClick);
  }

}());
(function () {
  "use strict";

  var ouvre = document.querySelectorAll('.imgBox3');

  function gestClick() {
    console.log(this);
    this.classList.toggle("actif3");
  }

  for (var i = 0; i < ouvre.length; i++) {
    var ouverture = ouvre[i];
    ouverture.addEventListener("click",gestClick);
  }

}());

