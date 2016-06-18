# News reader

## Tech stack

- Primary languages: es6, scss, pug
- Language plugins: jsx
- Transpilers: babel (es2015, react)
- Frameworks: express, react
- Libraries: muicss
- Tools: gulp, webpack

### npm globals

- gulp-cli
- eslint
- eslint_d
- eslint-plugin-react

## Directory structure

- src/ - server root built by gulp-babel (excluding client/)
  - client/ - static web root build by webpack
    - scripts/ - application code written in es6 and jsx
    - styles/ - all scss files
  - routes/ - non-static path routing logic
  - views/ - templates written in pug

## Conventions

### General

Static methods should come last.

### React components

Render methods should come immediately after the constructor.
All non-static functions must bind to instance in constructor.

### File naming

Files should be lowercase with nouns separated by a dash.
e.g. `hello-world.js`

### HTML, Scss

Element id and classes should be camelCase.

## Sublime

### Helpful packages

- Babel
- BracketHighlighter
- DocBlockr
- Git
- GitGutter
- Sass
- SublimeLinter
- SublimeLinter-contrib-eslint_d
