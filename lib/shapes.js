

class Shape {
    constructor() {
        // defualt colour to prevent any errors 
      this.color = 'black';
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render() {
      throw new Error('Method "render" should be implemented in child class');
    }
  }
  
  class Triangle extends Shape {
    render() {
      return `<polygon points="150,0 300,200 0,200" fill="${this.color}" />`;
    }
  }
  
  class Circle extends Shape {
    render() {
      return `<circle cx="150" cy="100" r="100" fill="${this.color}" />`;
    }
  }
  
  class Square extends Shape {
    render() {
      return `<rect x="0" y="0" width="300" height="200" fill="${this.color}" />`;
    }
  }
  
  module.exports = {
    Triangle,
    Circle,
    Square
  };
  



