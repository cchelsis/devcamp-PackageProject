
'use strict';
//the reason you use 'use strict' is because you never know what version of js someone is using. It could break their application. 

var moment = require('moment');

/**
 * Returns a string element with a footer and an updating year
 * @param {string} name // the function is going to expect a parameter
 * @return {string} //this is going to be the output of the function
 */

exports.footer = function (name) {
    return "Copyright " + moment().format('YYYY') + " " + name + " All rights reserved";
};

