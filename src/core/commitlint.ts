import { getPackageJson } from "../utils/env";
import { writeInPkg, run } from "../utils/tool"
import fs from 'fs-extra';
import { commitLintConfig } from '../template/commitlint.config';
import { getPath } from "../utils/path";


const devDependencies = [
  '@commitlint/cli@^17.0.3',
  '@commitlint/config-angular@^17.0.3',
  'commitizen@^4.2.4',
  'cz-customizable@^6.9.0',
  '@commitlint/cz-commitlint@^17.0.3',
  'inquirer@^8.0.0',
];

const commitMsg = `#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx --no-install commitlint --edit $1
`;

const preCommit = `#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"
npm run pre-commit
`;

const commitlintPath = getPath('commitlint.config.js');

export const commitLintInit = async () => {
	await writeInPkg(devDependencies)
	await run('npx husky add .husky/commit-msg "npm-run-test"')
	let pkgJson = await getPackageJson()
	pkgJson['config'] = {
		commitizen: {
			path:'@commitlint.cz-commitlint'
		}
	}

	pkgJson.scripts['commit'] = 'git add . && git-cz'

	fs.writeJsonSync(getPath('package.json'), pkgJson, { spaces: 2})

	if(await fs.pathExists(commitlintPath)){
		// 删除
		fs.removeSync(commitlintPath);
	}
	fs.outputFileSync(commitlintPath, commitLintConfig)
	fs.outputFileSync(getPath('./.husky/commit-msg'), commitMsg)
	fs.outputFileSync(getPath('./.husky/pre-commit'), preCommit)
}