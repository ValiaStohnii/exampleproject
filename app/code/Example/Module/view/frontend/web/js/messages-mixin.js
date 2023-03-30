/**
 * Mixin JavaScript components return a function with the first parameter being
 * the original object, and that function returns a new value for the object. If
 * the original object is a JavaScript component, you can call its .extend()
 * method and pass in new properties, which are then "mixed in" to the original
 * object. You can also use the alternative format for non-component overrides.
 */

define([],function () {
    'use strict'

    return function (originalMessages) {

        // 1 -----

        originalMessages.defaults.hideTimeout = 1000;
        return originalMessages

        // ---------
        // or
        // 2 ---------
        // return originalMessages.expend({
        //     defaults: {
        //         hideTimeout: 1000,
        //         hideSpeed: 100,
        //     }
        // });
        //   ----------
    }
})
