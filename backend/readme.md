# BoilerPLate for NodeJs with TypeScript and jest with mocking using yarn

## References:

1. for tsconfig: https://github.com/tsconfig/bases  
   you install as per your package then replace the content of tsconfig.json with what the reade me is saying.
2. https://www.typescriptlang.org/tsconfig#module
3. for jest: https://www.npmjs.com/package/ts-jest
4. https://www.youtube.com/watch?v=I6ypD7qv3Z8&ab_channel=BenAwad
5. for mocking in jest:https://www.youtube.com/watch?v=OS5mVVM5vAg&ab_channel=Codete

## step 1: installations

npm init -y

yarn add express

(-D and --dev are the same)

yarn add --dev @tsconfig/node18 (https://github.com/tsconfig/bases) or check if there is new node version.

yarn add -D typescript ts-node nodemon jest ts-jest axios
yarn add -D @types/node @types/express @types/jest

## step 2: tsconfig

create tsconfig.json either manually ro write :tsc --init
delete content of tsconfig.json and only put

```json
{
  "extends": "@tsconfig/node16/tsconfig.json"
}
```

ref: https://github.com/tsconfig/bases

## step 3:create the file

create src/index.ts with:

```
 console.log("Hello Word")
```

## step 4: option 1 & 2

#### option 1

change scripts section in package.json:
"start": "ts-node src/index.ts",
"dev": "nodemon --exec ts-node src/index.ts"

- to run: yarn dev
- does not create any js file

#### option 2

add following to tsconfig:

```json
"compilerOptions": {
"outDir": "./dist"
}
```

now tscofig.json will looks like this:

```json
{
  "extends": "@tsconfig/node16/tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist"
  }
}
```

change scripts section in package.json:
"watch": "tsc -w",
"dev": "nodemon dist/index.js",
"start": "node dist/index.js",

- to run part 1: in one terminal: yarn watch (created js file in dist folder)
- to run part 2: in second terminal: yarn dev

Note 1: in case of delete or rename files delete dist folder.

Note 2: No file should be in same level o upper than index.ts

---

For Jest unit test:
ref:https://github.com/kulshekhar/ts-jest

yarn ts-jest config:init
yarn jest
