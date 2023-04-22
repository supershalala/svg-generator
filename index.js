const inquirer = require("inquirer");

const fs = require("fs");

const shapes = require("./lib/shapes.js")

const ShapeOptions = [

    "circle",

    "triangle",

    "square",

 

]

const initalizeApp = () => {

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
            message: 'Enter text color either a keyword or hex'
        },


    






    ])
    .then((answers) => {
        console.log(answers);

        const selectedShape = answers.shape === 'triangle' ? shapes.triangle:
                  answers.shape === 'circle' ? shapes.circle : shapes.square;


        const svg = `

        <svg width="300" height="200">
        <g fill="${answers.shapeColor}">
        ${selectedShape}
        </g>
        <text x="150" y="100" text-anchor="middle" fill="${answers.textColor}" font-size="48">${answers.text}</text>
      </svg>
            
        `

        // Write the SVG markup to a file
    fs.writeFile('shape.svg', svg, err => {
        if (err) throw err;
        console.log('SVG file saved!');
      });

      });

}


    initalizeApp();









    
