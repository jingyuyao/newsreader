# News reader

## Tech stack

- Primary languages: es6, scss, pug
- Language plugins: jsx
- Transpilers: babel (es2015, react)
- Frameworks: express, react
- Libraries: muicss
- Tools: gulp, webpack

## Directory structure

- src/ - server root built by gulp-babel (excluding client/)
  - client/ - static web root build by webpack
    - scripts/ - application code written in es6 and jsx
    - styles/ - all scss files
  - routes/ - non-static path routing logic
  - views/ - templates written in pug

## Conventions

### React components

`render()` should be the first function after constructor.

### File naming

Files should be lowercase with nouns separated by a dash.
e.g. `hello-world.js`

### HTML, Scss

Element id and classes should be camelCase.
