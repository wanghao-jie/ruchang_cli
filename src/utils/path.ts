import path from "path"
import { getEnv } from "./env"

export const getPath = (name: string) => {
	const basePath = getEnv('base') as string
	return path.resolve(basePath, name)
}