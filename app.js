$(document).ready(function () {
  $.ajax({
    url: 'https://icanhazdadjoke.com/',
    method: 'GET',
    dataType: 'JSON',
  }).done(function (jokeData) {
    $('#jokeDisplay').text(jokeData.joke)
  }).fail(function (err) {
    alert(err.responseJSON.errors)
  });

  $('.nextJoke').on('click', function () {
    $.ajax({
      url: 'https://icanhazdadjoke.com/',
      method: 'GET',
      dataType: 'JSON',
    }).done(function (jokeData) {
      $('#jokeDisplay').text(jokeData.joke)
    }).fail(function (err) {
      alert(err.responseJSON.errors)
    });;
  });

  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
  }

  window.addEventListener('keydown', playSound);
});