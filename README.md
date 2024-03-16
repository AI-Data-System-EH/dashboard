# History

<br/>

|             |                                                                                                          |
| ----------- | -------------------------------------------------------------------------------------------------------- |
| 23. 01. 07. | :white_check_mark: 초안 작성<br>:white_check_mark: React + Typescript / yarn berry                       |
| 23. 01. 09. | :white_check_mark: Tailwindcss + PostCSS + Prettier plugin 적용                                          |
| 23. 01. 10. | :white_check_mark: Eslint + Prettier / vscode 세팅 맞추기<br>:white_check_mark: Yarn PnP dependency 정리 |
| 23. 01. 11. | :white_check_mark: Next.js 적용                                                                          |
| 23. 01. 12. | :white_check_mark: EditorConfig, Husky & Lint-staged 적용                                                |

<br/>

#### [:rocket: GitHub Emoji Picker](#https://github-emoji-picker.vercel.app/)

<br/>

# Dependencies

#### `package.json`

<font size="1">

```json
{
	"name": "smt-dashboard",
	"version": "0.1.0",
	"private": true,
	"packageManager": "yarn@3.3.1",
	"dependencies": {
		"@fortawesome/react-fontawesome": "^0.2.0",
		"@reduxjs/toolkit": "^1.9.1",
		"chart.js": "^4.1.2",
		"next": "^13.1.1",
		"react": "^18.2.0",
		"react-dom": "^18.2.0",
		"react-redux": "^8.0.5",
		"tailwindcss": "^3.2.4"
	},
	"devDependencies": {
		"@babel/core": "^7.20.12",
		"@babel/preset-env": "^7.20.2",
		"@next/eslint-plugin-next": "^13.1.1",
		"@svgr/webpack": "^6.5.1",
		"@testing-library/jest-dom": "^5.16.5",
		"@types/babel__core": "^7.1.20",
		"@types/babel__preset-env": "^7.9.2",
		"@types/eslint": "^8.4.10",
		"@types/jest": "^29.2.5",
		"@types/node": "^18.11.18",
		"@types/prettier": "^2.7.2",
		"@types/react": "^18.0.26",
		"@types/react-dom": "^18.0.10",
		"@types/testing-library__jest-dom": "^5.14.5",
		"@typescript-eslint/eslint-plugin": "^5.48.1",
		"@typescript-eslint/parser": "^5.48.1",
		"autoprefixer": "^10.4.13",
		"babel-loader": "^9.1.2",
		"editorconfig": "^1.0.1",
		"eslint": "^8.31.0",
		"eslint-config-prettier": "^8.6.0",
		"eslint-config-standard-with-typescript": "^26.0.0",
		"eslint-plugin-import": "^2.26.0",
		"eslint-plugin-n": "^15.6.1",
		"eslint-plugin-promise": "^6.1.1",
		"eslint-plugin-react": "^7.32.0",
		"eslint-plugin-tailwindcss": "^3.8.0",
		"husky": "^8.0.3",
		"lint-staged": "^13.1.0",
		"postcss": "^8.4.21",
		"postcss-cli": "^10.1.0",
		"postcss-import": "^15.1.0",
		"prettier": "^2.8.2",
		"prettier-plugin-multiline-arrays": "^1.1.2",
		"prettier-plugin-tailwindcss": "^0.2.1",
		"sass": "^1.57.1",
		"scss": "^0.2.4",
		"typescript": "^4.9.4"
	},
	"scripts": {
		"dev": "next dev",
		"build": "next build",
		"start": "next start",
		"lint-staged": "lint-staged"
	},
	"lint-staged": {
		"*.{js,jsx,ts,tsx}": ["eslint --fix", "prettier --write"],
		"*.{css,scss}": ["prettier --write"]
	},
	"browserslist": {
		"production": [">0.2%", "not dead", "not op_mini all"],
		"development": ["last 1 chrome version", "last 1 firefox version", "last 1 safari version"]
	}
}
```

</font>

<br/>

# Installation

## 1. [NVM](#https://github.com/coreybutler/nvm-windows) (Node Version Manager)

-   Installation

    -   Windows [(Installer download)](#https://github.com/coreybutler/nvm-windows/releases)

        설치파일로 설치 후 cmd, powershell 등으로 명령어 실행

    -   Mac (brew)
        ```
        $ brew install nvm
        ```
        -   Add following lines at `~/.bash_profile` or `~/.zshrc`, etc.
            <font size="1">
            ```
            export NVM_DIR="$HOME/.nvm"
            [ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && \. "/opt/homebrew/opt/nvm/nvm.sh"  # This loads nvm
            [ -s "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm" ] && \. "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm"  # This loads nvm bash_completion
            ```
            </font>

-   Version check
    ```
    $ nvm -v
    1.1.10
    ```
-   Install & Use LTS version
    ```
    $ nvm install --lts
    $ nvm use --lts
    ```
-   Show installed Node.js versions
    ```
    $ nvm ls
      * 18.12.1 (Currently using 64-bit executable)
    ```

<br/>

## 2. [Yarn](#https://github.com/yarnpkg/berry) <sup><font size="2">Package manager</font></sup>

<br/>

> <br/>
>
> NPM은 패키지 모듈들이 차지하는 용량이 크기 때문에<br> > `Yarn berry` (berry는 버전 이름)를 사용해 패키지를 관리<br>
>
> > https://mmsesang.tistory.com/entry/Yarn-berry-yarn-pnp-%ED%99%98%EA%B2%BD%EC%9C%BC%EB%A1%9C-React-Typescript-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%84%B8%ED%8C%85%ED%95%98%EA%B8%B0  
> > https://velog.io/@seokunee/Yarn-Berry%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%B4%EB%B3%B4%EC%9E%90  
> > https://kasterra.github.io/setting-yarn-berry/
>
> <br/>

<br/>

```
$ corepack enable
$ corepack prepare yarn@stable --activate
```

```
// Zero install
$ yarn init -2
```

```
$ yarn set version stable
```

<br/>

## 3. Create-React-App(CRA)

<br/>

템플릿 앱(프로젝트) 생성

<br/>

-   Create react app

    -   `<my-app>` 이름의 리액트 앱 프로젝트(디렉토리) 생성

        ```
        $ yarn create react-app <my-app> --template typescript
        ```

    -   디렉토리를 새로 만들지 않고 생성하려면 다음과 같이 `.` (현재 위치)에 생성

        ```
        $ yarn create react-app . --template typescript
        ```

-   패키지 종속성을 Yarn PnP로 관리하기 위해 기존의 node_modules 관련 폴더를 삭제

    -   unix-like shell

        ```
        $ rm -rf node_modules
        $ rm -rf yarn.lock
        ```

    -   Windows PowerShell

        ```
        $ rm -r -fo node_modules
        $ rm -r -fo yarn.lock
        ```

-   Yarn PnP로 종속성 패키지 설치

    ```
    $ yarn install
    ```

-   Yarn에서 설치한 Extension SDK를 Vscode에 적용

    ```
    $ yarn dlx @yarnpkg/sdks vscode
    ```

-   :warning: React App 실행했을 때 jest-dom error 발생 시 재설치

    ```
    $ yarn remove @testing-library/jest-dom
    $ yarn add -D @testing-library/jest-dom
    ```

<br/>

## 3. [TailwindCSS](#https://tailwindcss.com/) <sup><font size="2">CSS Framework</font></sup>

<br/>

-   초기 설치

    ```
    $ yarn add -D tailwindcss postcss-cli autoprefixer
    ```

-   tailwindcss 초기화 및 설정파일 생성

    ```
    $ yarn tailwindcss init -p
    ```

-   eslint에 tailwindcss 플러그인 추가

    ```
    $ yarn add -D eslint-plugin-tailwindcss
    ```

<br/>

#### `tailwind.config.js`

<font size="1">

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./public/index.html"],
	theme: {
		extend: {},
	},
	plugins: [],
};
```

</font>

#### `eslint.json`

<font size="1">

```json
{
	"env": {
		"browser": true,
		"es2021": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended",
		"standard-with-typescript",
		"plugin:@typescript-eslint/recommended",
		"plugin:@next/next/recommended",
		// "plugin:prettier/recommended",	// ESLint 공식에서 사용 안할것을 권장함(설정충돌)
		"prettier",
		"plugin:tailwindcss/recommended"
	],
	"overrides": [],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module",
		"project": "./tsconfig.json"
	},
	"plugins": ["react", "@typescript-eslint", "tailwindcss"],
	"rules": {
		// "tailwindcss/classname-order": "off"
		"tailwindcss/no-custom-classname": "off",
		// "no-unused-expressions": "off",
		"@typescript-eslint/explicit-function-return-type": "off",
		"@typescript-eslint/strict-boolean-expressions": "warn",
		"@typescript-eslint/prefer-nullish-coalescing": "warn",
		"@typescript-eslint/triple-slash-reference": "off"
	},
	"settings": {
		"react": {
			"version": "detect"
		}
	}
}
```

</font>

### 3-1. SCSS

```
$ yarn add -D postcss-import
```

-   파일 scss로 변경하여 사용하면 됨
-   tailwindcss에 정의된 클래스 이외 사용자가 만든 css의 클래스에 나타나는 `[warning] no-custom-classname` 제거를 위해 `eslint.json`에 다음을 추가

    <font size="1">

    ```
    ...
    "rules": {
        "tailwindcss/no-custom-classname": "off"
    }
    ...
    ```

    </font>

#### `postcss.config.js`

<font size="1">

```js
module.exports = {
	plugins: {
		"postcss-import": {},
		"tailwindcss/nesting": {},
		tailwindcss: {
			config: "./tailwind.config.js",
		},
		autoprefixer: {},
	},
};
```

</font>

### 3-2. Prettier

```
$ yarn add -D prettier prettier-plugin-tailwindcss
```

#### `.prettierrc`

<font size="1">

```json
{
	"tabWidth": 2,
	"useTabs": false,
	"endOfLine": "lf",
	"semi": true,
	"singleQuote": false,
	"proseWrap": "preserve",
	"trailingComma": "es5",
	"bracketSameLine": true,
	"bracketSpacing": true,
	"arrowParens": "always",
	"consistent": true,

	"htmlWhitespaceSensitivity": "css",
	"jsxBracketSameLine": false,
	"jsxSingleQuote": false,
	"printWidth": 100,
	"quoteProps": "as-needed",
	"requirePragma": false,
	"insertPragma": false,
	"vueIndentScriptAndStyle": false,
	"embeddedLanguageFormatting": "auto",

	"overrides": [
		{
			"files": "*.{json}",
			"options": {
				"printWidth": 30,
				"tabWidth": 4,
				"useTabs": false
			}
		},
		{
			"files": "*.{html,yml,yaml}",
			"options": {
				"printWidth": 120,
				"tabWidth": 4,
				"useTabs": false
			}
		},
		{
			"files": "*.{md,markdown}",
			"options": {
				"printWidth": 200,
				"tabWidth": 4,
				"useTabs": true
			}
		},
		{
			"files": "*.{js,ts,jsx,tsx}",
			"options": {
				"printWidth": 120,
				"tabWidth": 2
			}
		}
	],
	"plugins": ["prettier-plugin-tailwindcss", "prettier-plugin-multiline-arrays"]
}
```

</font>

<br/>

#### 📌 _(참고) ESLint, Prettier Output 로그에서 vscode sdk 찾을수 없다고 나올 때_

1. vscode sdk 설치

    ```
    $ yarn dlx @yarnpkg/sdks vscode
    ```

2. `.vscode/settings.json`에 다음 추가 <br/>

    - 또는 workspace 세팅 (`<workspace-name>.code-workspace`)에 추가

    <br/>

    ```json
    {
    	"search.exclude": {
    		"**/.yarn": true,
    		"**/.pnp.*": true
    	},

    	"typescript.tsdk": ".yarn/sdks/typescript/lib",
    	"typescript.enablePromptUseWorkspaceTsdk": true,

    	"eslint.workingDirectories": [
    		{
    			"mode": "auto"
    		}
    	],
    	"eslint.packageManager": "yarn",
    	"eslint.nodePath": ".yarn/sdks",

    	"prettier.prettierPath": ".yarn/sdks/prettier/index.js",
    	"prettier.configPath": ".prettierrc"
    }
    ```

## 4. Next.js

<br/>

<br/>

## 5. EditorConfig

<br/>

<br/>

## 6. Husky + Lint-Staged

<br/>

<br/>

<br/><br/><br/><br/>

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
