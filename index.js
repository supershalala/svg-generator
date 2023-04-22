const inquirer = require("inquirer");

const fs = require("fs");

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
            name: 'input',
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
            message: 'Enter text color either a keyword or hex';
        },

        {
            type: 'list',
            name: 'shape',
            message: 'Please pick a shape option',
            choices: ShapeOptions,

        },

        


        {
            type: 'input',
            name: 'ShapeColor',
            message: 'Enter text color either a keyword or hex';
        },









    ])










    
}