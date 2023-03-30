// Paths can be used for non-AMD JavaScript modules & external files, just be sure
// to not include the ".js" extension as this is automatically appended.

//     You can set a path value to an array, and define multiple script sources.
//     If the first script fails to load, the next one will be used as a fallback.

var config ={
    "map": {
        "*": {
            "fadeInElement": "Example_Module/js/fade-in-element"
        }
    },
    "paths": {
        "vue": [
            "https://cdn.jsdelivr.net/npm/vue/dist/vue",
            "Example_Module/js/vue"
        ]
        //"vue": "Example_Module/js/vue"
    }
}
console.log('see you')
