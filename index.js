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

import inquirer from 'inquirer'
const question = [{
    type: 'list',
    name: 'osint-info',
    message: 'which kind of info you want',
    choices: ['Specific Info', 'All Info'],
    default: 'All Info'
},
{
    type: 'input',
    name: 'name',
    message: 'name',
    choices: ['js', 'ts']
},
{
    type: 'input',
    name: 'email',
    message: 'email (if not type null) ?',
    choices: ['js', 'ts']
},
{
    type: 'input',
    name: 'number',
    message: 'phone number (if not type null) ?',
    choices: ['js', 'ts']
},
{
    type: 'checkbox',
    name: 'listNeed',
    message: 'click checkout box',
    choices: ['location', 'ip', 'details']
}
]

function ask() {
    inquirer.prompt(question).then((answer) => {
        console.log(answer)
    })
}
ask()

