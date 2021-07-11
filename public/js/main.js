"use strict";

var title = "react js";
var fullName = "Nader Chargui";
var fun = function fun() {
    return "i'm nader learn react js ";
};
var ele = React.createElement(
    "div",
    null,
    React.createElement(
        "h2",
        null,
        "heloo  ",
        title
    ),
    React.createElement(
        "h1",
        null,
        "  welcome react js "
    ),
    React.createElement(
        "p",
        null,
        "lorem loremloremlorem lorem lorem ",
        3 + 3
    ),
    fun(),
    React.createElement("br", null),
    fullName && "oky  is  true Name"
);

ReactDOM.render(ele, document.getElementById('root'));

//jsx to  js  by babel  for browser understand this code jsx

// npm i  -g  babel-cli
// npm i  babel-preset-react   babel-preset-env

//  npx babel  src/index.js  --out-file=public/js/main.js  --presets=env,react
//  npx babel  src/index.js  --out-file=public/js/main.js  --presets=env,react  --watch
//  bech  tektab akther min stat  lazem taa3mil la9wass ()  w labed min parent 
/**
 * 
 * (
 *  <div>
 *    <h1>
 *     
 *   hello  jsx 
 * </h1>
 * <p>
 *  lorem   lorem  
 * </p>
 * </div>
 * 
 * )
 */
