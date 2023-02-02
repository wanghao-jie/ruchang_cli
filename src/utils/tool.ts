import { getEnv, getPackageJson } from "./env"
import { debugInfo, debugWarning } from './debug'
import fs from "fs-extra"
import { getPath } from "./path"
import spawn from 'cross-spawn'


// 检查是否包含某个属性
export const hasElementInArray = (list: Array<String>, element:string) => {
	return list.indexOf(element) >= 0 ? element : ''
}

export const writeInPkg = async (devArr: string[], key:string = 'devDependencies') => {
	let pkg = await getPackageJson()
	devArr.forEach((item: string)=>{
		// 为防止安装包名字含有@
		const index = item.lastIndexOf('@')
		const k = index === 1 ? item : item.slice(0, index)
		const v = index === -1 ? '' : item.slice(index+1) || ''

		pkg[key][k] = v
		debugInfo(`${item}✅`)
	})
	fs.writeJsonSync(getPath('package.json'), pkg, {spaces: 2})
}

export const run = async(str: string) => {
	const basePath = getEnv('base') as string
	const runArr = str.split(' ')
	if(runArr.length < 2){
		debugWarning(`运行参数错误${str}`)
		return false
	}
	const [npm, ...args ] = runArr
	debugInfo(`${runArr.join(' ')}✅`)
	spawn.sync(npm, args, {
		stdio: 'pipe',
		cwd: basePath
	})
}