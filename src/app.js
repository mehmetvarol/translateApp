// Prototype --- Ajax --- Callback
eventListeners();

function eventListeners() {
  document.querySelector("#translate-form").addEventListener("submit", translateWord);
  document.querySelector("#language").onchange = function() {
    ui.changeUI();
  }
}
const translate = new Translate(document.querySelector("#word").value, document.querySelector("#language").value);
const ui = new UI();
function translateWord(e) {
  translate.changeParametres(document.getElementById("word").value, document.getElementById("language").value);
  translate.translateWord(function(err, repsonse) {
    if (err) {
      console.log(err);
    } else {
      ui.displayTranslate(response);
    }
  });

  e.preventDefault();
}