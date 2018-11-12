function Translate(word, language) {
  this.apikey = "trnsl.1.1.20181110T192229Z.b08b63345ec72ca4.54b8841f1f4e4eef1552090b214f3f7341d6a622";
  this.word = word;
  this.language = language;

  this.xhr = new XMLHttpRequest();

}
Translate.prototype.translateWord = function(callback) {
  //Ajax İşlemleri
  const endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.language}`;
  this.xhr.open("GET", endpoint);

  this.xhr.onload = () => {
    if (this.xhr.status === 200) {
      const json = JSON.parse(this.xhr.responseText);

      const text = json.text[0];
      console.log(text)
      callback(null, text);
    } else {
      callback("Hata!!!!!", null);
    }
  }


  this.xhr.send();
}
Translate.prototype.changeParametres = function(newWord, newLanguage) {
  this.word = newWord;
  this.language = newLanguage;

}