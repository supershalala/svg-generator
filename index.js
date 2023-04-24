const inquirer = require("inquirer");

const fs = require("fs");


const { Triangle, Circle, Square } = require("./lib/shapes");



const initializeApp = () => {

  const ShapeOptions = [

    "circle",

    "triangle",

    "square"

 

]


    inquirer
    .prompt ([

        {
            type: 'input',
            name: 'text',
            message: 'Enter your text (MAX 3 Characters)',
            validate: function(input) {
              if (input.length !== 3) {
                return 'Input must be 3 characters long.';
              }
              return true;
            }
          },


        {

            type: 'input',
            name: 'textColor',
            message: 'Enter text color either a keyword or hex'
        },

        {
            type: 'list',
            name: 'shape',
            message: 'Please pick a shape option',
            choices: ShapeOptions,

        },

        


        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter shape color either a keyword or hex'
        },


    






    ])
    .then((answers) => {
        console.log(answers);



      let shape;
      if (answers.shape === "triangle") {
        shape = new Triangle();
      } else if (answers.shape === "circle") {
        shape = new Circle();
      } else {
        shape = new Square();
      }

      shape.setColor(answers.shapeColor);
      const selectedShape = shape.render();

      const svg = `
      <svg width="300" height="200">
        <g>
          ${selectedShape}
        </g>
        <text x="150" y="100" text-anchor="middle" fill="${
          answers.textColor
        }" font-size="48">${answers.text}</text>
      </svg>
      `;

        // Write the SVG markup to a file
    fs.writeFile('shape.svg', svg, err => {
        if (err) throw err;
        console.log('SVG file saved!');
      });

      });

}


    initializeApp();

    module.exports = { initializeApp };









