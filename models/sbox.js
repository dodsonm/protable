/*global window */

(function () {
    'use strict';

    if (!window.foo) {
        return;
    }

    switch (window.foo) {
    case 1:
        window.alert(1);
        break;
    default:
        window.alert('BAD');
    }

    return true;

}());
