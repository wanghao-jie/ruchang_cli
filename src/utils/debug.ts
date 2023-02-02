import chalk from 'chalk'
const log = console.log;
let debugSwitch = true;

const debugInfo = (msg: string) => {
	debugSwitch && log(chalk.hex('#646cff')(`[ruchang-cli]`) + chalk.red(msg) )
	// 如果出错就退出
	process.exit(0)
}
const debugError = (msg: string) => {
	debugSwitch && log(chalk.hex('#646cff')(`[ruchang_cli]:`)+chalk.red(msg))
	// 如果出错就退出
	process.exit(0)
}

const debugWarning = (msg:string) => {
		log(chalk.hex('#646cff')(`[ruchang-cli]:`) + chalk.yellow(msg))
}

/**
 * debug 强调
 * @param type 类型
 * @param msg 信息
 */

const debugProcess = (msg: string) => {
  debugSwitch && log(chalk.hex('#646cff')(`[ruchang-cli]:`) + chalk.yellow(msg));
};

const debugTxt = (msg:string) => {
	log(chalk.hex('#646cff')(`[ruchang-cli]:`) + chalk.hex('#5c6d82')(msg));
};

export {  debugInfo, debugError, debugWarning, debugProcess, debugTxt };