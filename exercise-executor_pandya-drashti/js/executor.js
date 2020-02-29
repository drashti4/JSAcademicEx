'use strict'

function execute(type, val1, val2) {

    if (typeof (type) == 'string') {
        switch (type) {
            case 'ADD':
                return add(val1, val2);
            case 'SUB':
                return sub(val1, val2);
            case 'MUL':
                return mul(val1, val2);
            case 'div':
                return div(val1, val2);
            default:
                return 'Undefined operation name...';
        }
    } else if (typeof (type) == 'function') {
        return div(val1, val2)
    } else {
        return 'Undefined operation type...'
    }

    function div(val1, val2) {
        return val1 / val2;
    }

    function add(val1, val2) {
        return val1 + val2;
    }

    function sub(val1, val2) {
        return val1 - val2;
    }

    function mul(val1, val2) {
        return val1 * val2;
    }

    function div(val1, val2) {
        return val1 / val2;
    }
}