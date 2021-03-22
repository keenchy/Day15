const milili = [10, 25, 4]; // Do not change this line

function myArr(mili) {
    'use strict';

    // Only change code below this line
    //  Using mili = [4, 10, 25] would be invalid


    mili[2] = 4;
    mili[0] = 10;
    mili[1] = 25;

    // Only change code above this line

    return mili;
}

console.log(myArr(mili)) // Change this line
module.exports = myArr;