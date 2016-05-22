./src/client is compiled and bundled using webpack. Every require must specify its extension so webpack loaders
can process it.

./src except ./src/client is compiled using standard gulp-coffee and thus require does not need to specify an extension.

Coffeescript conventions:
- One line object creation must be in curly braces: `a = {className: 'abc'}`

Reactjs conventions:
- Use null for no props
