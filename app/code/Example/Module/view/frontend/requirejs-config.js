// Paths can be used for non-AMD JavaScript modules & external files, just be sure
// to not include the ".js" extension as this is automatically appended.

//     You can set a path value to an array, and define multiple script sources.
//     If the first script fails to load, the next one will be used as a fallback.

// Shims are used to define relationships. By defining a shim, mapping
// "jquery-log" to "jquery", we can be sure jQuery loads before the plugin.

//     Defining a file under "deps" ensures it loads on every single page. This
// is generally an anti-pattern, as explicit dependency loading is preferred.

// Use "map" to easily override any other JavaScript component. The asterisk
// tells Magento to override this file for all RequireJS modules, and the
// convention is "FileToOverride": "FileThatOverrides" using RequireJS notation.

    var config ={
    "map": {
        "*": {
            "fadeInElement": "Example_Module/js/fade-in-element",
            "Magento_Review/js/submit-review":  "Example_Module/js/submit-review"
        }
    },
    "paths": {
        "vue": [
            "https://cdn.jsdelivr.net/npm/vue/dist/vue",
            "Example_Module/js/vue"
        ]
        //"vue": "Example_Module/js/vue"
    },
    "shim": {
        "Example_Module/js/jQuery-log": ["jquery"]
    },
    "deps": ["Example_Module/js/every-page"]
}
console.log('see you')

// Пошук елементу через термінал
// grep -R 'top-cart-btn-checkout' vendor/magento/module-*
// grep -R 'top-cart-btn-checkout' --include=*.js vendor/magento/module-*
