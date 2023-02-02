// 各种检测函数
import fs from 'fs-extra';
import { debugError } from './debug'
import { getEnv } from "./env"

export const checkVueVersion = (version: string) => {
	const v = version.split('.')[0] as string
	return Number(v.match(/\d+/g))
}

export const pathExists = async (name:string, ext: boolean = true): Promise<boolean | void> => {
	const base = getEnv('base') as string
	const res = await fs.pathExists(`${base}/${name}`)
	if(!res){
		ext && debugError(`${base}/${name}不存在`)
		return false
	}else{
		return res
	}
}