  let  title = "react js"
  let fullName  = "Nader Chargui"
   const fun = ()  => {
       return `i'm nader learn react js `
   }
var ele  = (

     <div>
     <h2>
         heloo  {title}
     </h2>
<h1>  welcome react js </h1>
   <p>

       lorem loremloremlorem lorem lorem {3 +3 }
   </p>
   {fun()}
   <br/>
   {/* law  essm  mawjoud  ektebly mbaaed  essm elhwa  mout88air mou3aref */}
   {fullName &&  "oky  is  true Name"}
     </div>
)

ReactDOM.render(ele, document.getElementById('root'))














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