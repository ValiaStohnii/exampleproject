define (['vue', "jquery", "Example_Module/js/jQuery-log"], function (Vue, $) {
    'use strict'

    $.log('testtesttest')

    return function (config,element) {
        return  new Vue({
            el: '#' + element.id,
            data: {
                message: config.message
            }
        })
    }
})
