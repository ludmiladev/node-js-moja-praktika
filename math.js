'use strict';

function square(num) {
    if (check (num)) {
        return num*num ;
    } else {
        return null;
       }
    }

function cube(num) {
    if (check (num)) {
        return num*num*num;
    } else {
        return null;
    }
}

function chek(num) {
    if (num>0) {
return true
    } else {
return false;
    }
}

exports.square = square;
exports.cube = cube;