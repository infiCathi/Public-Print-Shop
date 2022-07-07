(function() {
  var car = document.getElementsByClassName("carousel-item");
  var previousLight = null;

  function repeatOften() {
    if (previousLight) previousLight.classList.toggle('active')

    var random = Math.floor(Math.random() * (car.length - 1)) + 0;
    var randomLight = car[random];
    randomLight.classList.toggle(randomLight);
    previousLight = randomLight;
    setTimeout(repeatOften, 1000);
  }

  setTimeout(repeatOften, 1000);
})();
