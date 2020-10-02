
const m = require('md5');

let first = `npm ERR! code ENOSELF
npm ERR! Refusing to install package with name "react-mui-datatables" under a package
npm ERR! also called "react-mui-datatables". Did you name your project the same
npm ERR! as the dependency you're installing?
npm ERR!
npm ERR! For more information, see:
npm ERR!     <https://docs.npmjs.com/cli/install#limitations-of-npms-install-algorithm>

npm ERR! A complete log of this run can be found in:`

let second = `npm ERR! code ENOSELF
npm ERR! Refusing to install package with name "react-mui-datatables" under a package
npm ERR! also called "react-mui-datatables". Did you name your project the same
npm ERR! as the dependency you're installing?
npm ERR!
npm ERR! For more information, see:
npm ERR!     <https://docs.npmjs.com/cli/install#limitations-of-npms-install-algorithm>

npm ERR! A complete log of this run can be found in:`;

function compareLongString(stringOne,stringTwo){
    let one = m(stringOne);
    let two = m(stringTwo);
    if(one === two){
        return true;
    }else{
        return false;
    }
}

const results = compareLongString(first,second);

console.log(results);
