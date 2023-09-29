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
    name: 'jsts',
    message: 'do you prefer js or ts',
    choices: ['js', 'ts'],
    default: 'ts'
},
{
    type: 'input',
    name: 'reason',
    message: 'why do you prefer this ?',
    choices: ['js', 'ts']
},
{
    type: 'checkbox',
    name: 'result',
    message: 'click checkout box',
    choices: ['bun', 'deno', 'node']
}
]

function ask() {
    inquirer.prompt(question).then((answer) => {
        console.dir(answer, { color: true })
        console.log(answer)
    })
}
ask()

