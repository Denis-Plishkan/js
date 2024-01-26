// class declaration

class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  }

// class expression

// безымянный
let Rectangle = class {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  };
  console.log(Rectangle.name);
  // отобразится: "Rectangle"
  
  // именованный
  let Rectangle = class Rectangle2 {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  };
  console.log(Rectangle.name);
  // отобразится: "Rectangle2"


  // Методы прототипа

  class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  
    get area() {
      return this.calcArea();
    }
  
    calcArea() {
      return this.height * this.width;
    }
  }
  
  const square = new Rectangle(10, 10);
  
  console.log(square.area); // 100


  // Обращение к родительскому классу с помощью super

  class Cat {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} издаёт звук.`);
    }
  }
  
  class Lion extends Cat {
    speak() {
      super.speak();
      console.log(`${this.name} рычит.`);
    }
  }
  
  let l = new Lion("Фаззи");
  l.speak();
  // Фаззи издаёт звук.
  // Фаззи рычит.