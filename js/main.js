// Avvio funzionalità solo dopo aver caricato l'intero documento HTML
$(document).ready(
  function () {
    // Aggiungo funzionalità al click del tasto next
    var next = $('.next')
    next.click(
      function () {
        nextImage()
      }
    )
    // Aggiungo funzionalità al click del tasto prev
    var prev = $('.prev')
    prev.click(
      function () {
        prevImage()
      }
    )
  }
)

// Funzione per visualizzare l'immagine successiva -----------------------------
function nextImage() {
  // Variabili di funzione
  var activeImg = $('.images img.active')
  var firstImg = $('.images img.first')
  var activeCircle = $('.nav i.active')
  var firstCircle = $('.nav i.first')
  // Eseguo eccezione della funzione se visualizzo l'ultima immagine per tornare alla prima
  if (activeImg.hasClass('last')) {
    firstImg.addClass('active')
    firstCircle.addClass('active')
  }
  // Eseguo funzione in caso di "normalità"
  activeImg.removeClass('active')
  activeImg.next('img').addClass('active')
  activeCircle.removeClass('active')
  activeCircle.next('i').addClass('active')
}
// Funzione per visualizzare l'immagine precedente -----------------------------
function prevImage() {
  var activeImg = $('.images img.active')
  var lastImg = $('.images img.last')
  var activeCircle = $('.nav i.active')
  var lastCircle = $('.nav i.last')
  // Eseguo eccezione della funzione se visualizzo la prima immagine per tornare all'ultima
  if (activeImg.hasClass('first')) {
    lastImg.addClass('active')
    lastCircle.addClass('active')
  }
  // Eseguo funzione in caso di "normalità"
  activeImg.removeClass('active')
  activeImg.prev('img').addClass('active')
  activeCircle.removeClass('active')
  activeCircle.prev('i').addClass('active')
}
