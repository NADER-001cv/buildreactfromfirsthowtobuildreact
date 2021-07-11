'use strict';

var ele = React.createElement(
  'h1',
  null,
  '  welcome react js '
);

reactDOM.render(ele, document.getElementById('root'));

//jsx to  js  by babel  for browser understand this code jsx

// npm i  -g  babel-cli
// npm i  babel-preset-react   babel-preset-env

//  npx babel  src/index.js  --out-file=public/js/main.js  --presets=env,react
