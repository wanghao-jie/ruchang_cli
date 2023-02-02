import cac from "cac";
import { answerType } from "./interface";
import { start } from './start';
import { name } from '../package.json';
import { getPackageJson, setEnv } from './utils/env'

const cli = cac(name)

export default async (answers: answerType) => {
	const pkgJson = await getPackageJson()
	const { version } = pkgJson
	// console.log('pkgJson', pkgJson, version, answers);

	cli
    .command('[root]')
    .alias('alias')
    .action(async (_root, options) => {
			
      let base: string = options.base;
      if (!base) {
        // 项目的最终路径
        base = process.cwd();
      }
			console.log('options',options,base);

      setEnv('base', base);
      await start(base, answers);
    });

  cli.help();
  cli.version(version);
  cli.parse();
}