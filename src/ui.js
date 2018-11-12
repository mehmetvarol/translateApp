function UI() {
  this.outputWord = document.getElementById("outputWord");
  this.outputLanguage = document.getElementById("outputLanguage");
  this.outputImage = document.getElementById("outputImage");

  this.languageList = document.getElementById("language");


}
UI.prototype.changeUI=function () {
//Arayüz değiştir
  this.outputImage.src = `images/${this.languageList.value}.png`;

  this.outputLanguage.innerHTML = this.languageList.options[this.languageList.selectedIndex].textContent


}
UI.prototype.displayTranslate = function (word) {
  this.outputWord.textContent = word;
}