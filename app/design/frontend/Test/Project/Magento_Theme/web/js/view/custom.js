define(['uiComponent', 'ko'], (uiComponent, ko)=>{
    'use strict'

    return uiComponent.extend({
        defaults: {
            // text: ko.observable('default text'),
            // text2: $t('default text')
            template: 'Magento_Theme/custom',
            isActive: ko.observable(false)
        },

        initialize(){
            this._super();

            // setTimeout(()=>{
            //     this.text('update text');
            // }, 3000)
        },

        toggleState() {
            this.isActive (!this.isActive());
        }
    })
});
