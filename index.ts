#!/usr/bin/env node
import inquirer from "inquirer";
import initCli from './src/cli'
import { answerType } from "./src/interface";

const promptList  = [
	{
		type: 'confirm',
		message:'是否Vue3项目',
		name:'vue3'
	},
	{
		type:'checkbox',
		message:'选择安装的插件（默认全选）',
		name:'plugins',
		choices: [
      {
        name: 'eslint注册',
        value: 'eslint',
        checked: true,
      },
      {
        name: 'husky注册',
        value: 'husky',
        checked: true,
      },
      {
        name: 'commitLint注册',
        value: 'commitLint',
        checked: true,
      },
      {
        name: 'vscode格式化注册',
        value: 'vscode',
        checked: true,
      },
    ],
	}
]
const question = async () => {
	const answers: answerType = await inquirer.prompt(promptList)
	console.log('answers', answers)
	
	initCli(answers)
}
question()