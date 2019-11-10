/*1) Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:

поле, хранящее радиус окружности;
get-свойство, возвращающее радиус окружности;
set-свойство, устанавливающее радиус окружности;
get-свойство, возвращающее диаметр окружности;
метод, вычисляющий площадь окружности;
метод, вычисляющий длину окружности.
Продемонстрировать работу свойств и методов. */

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  set radius(value) {
    //какой синтаксис лучше использовать?Это одно и то же? если слитно, то функция? Для чего???
    this._radius = value;
  }
  get radius() {
    return this._radius;
  }
  get diametr() {
    //если геттер без сеттера, то свойство защищенное (доступно только внутри класса и для дочерних классов)?
    return this._radius * 2;
  }
  area () {
    let area =  (Math.PI * this._radius ** 2).toFixed(2);
    return area;
  }
  circuit () {
    let circuit =  (Math.PI * this._radius * 2).toFixed(2);
    return circuit;
  }
}

let circle = new Circle(10);
console.log(circle);
console.log(circle.area());
console.log(circle.circuit());
/*2) Реализовать класс, описывающий простой маркер. В классе должны быть следующие компоненты:

поле, которое хранит цвет маркера;
поле, которое хранит количество чернил в маркере (в процентах);
метод для печати (метод принимает строку и выводит текст соответствующим цветом; текст выводится до тех пор,
 пока в маркере есть чернила; один не пробельный символ – это 0,5% чернил в маркере).
Реализовать класс, описывающий заправляющийся маркер, унаследовав его от простого маркера и добавив метод для заправки маркера.

Продемонстрировать работу написанных методов. */

/*class Marker {
  constructor(_color, _ink) {//где правильно начинать наименование с _? this._color - защищенное?
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
*/
