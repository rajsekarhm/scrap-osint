/**
 * const inquirer = require('inquirer')
 * const question = [{
 * type:'list',
 * name:'jsts',
 * message:'do you prefer js or ts',
 * choices : ['js','ts'],
 * default :'ts'
 * },
 * {
 * type:'input',
 * name:'reason',
 * message:'why do you prefer this ?',
 * choices : ['js','ts']
 * }
 * ]
 *
 * function ask(){
 * inquirer.prompt(question).the((answer)=>{
 * console.dir(answer,{color:true})
 * })
 * }
 *
 * ask()
 */

import inquirer from "inquirer";
const question = [
  {
    type: "list",
    name: "price_track",
    message: "which kind of assest wanna track",
    choices: ["crypto", "stocks-IN"],
    default: "stocks-IN",
  },
  {
    type: "input",
    name: "ticker",
    message: "enter ticker of stock or crypto",
  },
  {
    type: "checkbox",
    name: "latest_news",
    message: "wanna to know latest news ?",
    choices: ["yes", "no"],
  },
  {
    type: "checkbox",
    name: "price_history",
    message: "wanna to know price history?",
    choices: ["yes", "no"],
  },
  {
    type: "input",
    name: "resource_link",
    message: "ask chatgpt ",
    default: "no",
  },
];

function ask() {
  inquirer.prompt(question).then((answer) => {
    console.log(answer);
  });
}
ask();
