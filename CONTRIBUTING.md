## Contributing

### Building

Open a terminal window.

Clone the davinci-units repo:
```
git clone git://github.com/geometryzen/davinci-units.git
```

Change to the repo directory:
```
cd davinci-units
```

Install NPM:
```
npm install
```
to install the tooling dependencies (For this you need to have [Node.js](http://nodejs.org) installed).

Install JSPM:
```
jspm install
```
to install JSPM, used for testing.

Install TypeScript definitions:
```
tsd install
```
to install TypeScript definitions for Jasmine used in testing.

## Building

```
grunt
```
to compile the source using the TypeScript compiler (For this you need to have [TypeScript](http://www.typescriptlang.org) installed) and to package the individual files into a single JavaScript file.

## Making Changes

Make your changes to the TypeScript files in the _src_ directory. Do not edit the files in the _dist_ directory, these files will be generated.

## Testing

```
grunt test
```

## Versioning

```
src/davinci-units/config.ts
package.json
```

## Git

```
git add --all
git commit -m '...'
git tag -a major.minor.patch -m '...'
git push origin master --tags
npm publish
```