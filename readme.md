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
