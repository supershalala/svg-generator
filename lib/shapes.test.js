const { Triangle, Circle, Square } = require('./shapes');

test('Triangle render with color blue', () => {
  const shape = new Triangle();
  shape.setColor('blue');
  expect(shape.render()).toEqual('<polygon points="150,0 300,200 0,200" fill="blue" />');
});

test ('Circle to render with color red', () => {

    const shape = new Circle();
    shape.setColor('red');
    expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="100" fill="red" />`);
})
