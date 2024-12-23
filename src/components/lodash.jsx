// Lodash is one such library that is the successor of underscore.js. It is used to simplify your work of managing and editing objects and arrays by providing lots of utility or service methods to do things quickly.

// There is another library to optimize your code is Ramda. It is a functional library like underscore.js, Lodash.js.

// Some of the methods which I found quite handy and ease my the development process is _pick, _map, _filter, _has,  cloneDeep.

// Setup-

// npm i lodash
// npm i @types/lodash
import * as _ from "lodash";

// For more information, you can check the official website.

let arrData = [
    {
      a: 1,
      b: '33'
    },
    {
      a: 2,
      b: '44'
    }
  ]

  let d = _.cloneDeep(arrData);
  d[0].a = 44444;
  console.log(arrData);
  console.log(d);
  // your case  
  let k = Object.assign([], arrData);
  _.uniq('aaabbbccc').join('');  
  if (k[0] == arrData[0]) {
    console.log(' In your case references are the same');
  }