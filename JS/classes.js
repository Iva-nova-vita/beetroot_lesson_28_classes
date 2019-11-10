/*2) Реализовать класс, описывающий простой маркер. В классе должны быть следующие компоненты:

поле, которое хранит цвет маркера;
поле, которое хранит количество чернил в маркере (в процентах);
метод для печати (метод принимает строку и выводит текст соответствующим цветом; текст выводится до тех пор,
 пока в маркере есть чернила; один не пробельный символ – это 0,5% чернил в маркере).
Реализовать класс, описывающий заправляющийся маркер, унаследовав его от простого маркера и добавив метод для заправки маркера.

Продемонстрировать работу написанных методов. */

class Marker {
  constructor(_color, _ink) {
    this.color = _color;
    this.ink = _ink;
  }
  print(text) {
    console.log(text.length);
    let styles = `color: ${this.color}`;
    let textLength = Math.floor((100 / 0.5) * this.ink);
    let spaces = 0;
    for (let i = 0; i < textLength; i++) {
      if (text[i] == " ") {
        spaces++;
      }
    }
    text = text.substr(0, textLength + spaces);
    console.log(textLength);
    document.write(`<p style= "${styles}">${text}</p>`);
  }
}
let greenMarker = new Marker("green", 0.2);
let redMarker = new Marker("red", 0.9);
console.log(greenMarker);
console.log(redMarker);
greenMarker.print(
  "Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации. "
);
redMarker.print(
  "Также все другие известные генераторы Lorem Ipsum используют один и тот же текст, который они просто повторяют, пока не достигнут нужный объём. Это делает предлагаемый здесь генератор единственным настоящим Lorem Ipsum генератором. Он использует словарь из более чем 200 латинских слов, а также набор моделей предложений. "
);

class FillMarker extends Marker {
  constructor(_color, _ink, _newInk) {
    super(_color, _ink);
    this.newInk = _newInk;
  }
  print(text) {
    console.log(text.length);
    let styles = `color: ${this.color}`;
    let textLength = Math.floor((100 / 0.5) * (this.ink + this.newInk));
    let spaces = 0;
    for (let i = 0; i < textLength; i++) {
      if (text[i] == " ") {
        spaces++;
      }
    }
    text = text.substr(0, textLength + spaces);
    console.log(textLength);
    document.write(`<p style= "${styles}">${text}</p>`);
  }
}
let pinkMarker = new FillMarker("pink", 0.2, 0.1);
console.log(pinkMarker);
pinkMarker.print("В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum");
