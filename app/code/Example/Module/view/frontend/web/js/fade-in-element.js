define(['jquery'], function ($) {
    'use strict'

    return function (className, duraction) {
        $(className).hide().fadeIn(duraction || 2000)
    }
})
