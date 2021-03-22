function checkVariableScoope() {
    'use strict';

    // Only change code below this line

    var i = 'function variable';

    // Only change code above this line

    if (true) {

        // Only change code below this line

        i = 'block variable';

        // Only change code above this line

        console.log('Scope i is: ', 'i');
    }
    console.log('Scope i is: ', 'i');
    return i;
}

checkVariableScoope();
module.exports = checkVariableScoope;