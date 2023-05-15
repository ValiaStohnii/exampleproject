define(['uiComponent', 'ko', mage/transalte], (uiComponent, ko, $t)=>{
    'use strict'

    return uiComponent.extend({
        defaults: {
            text: ko.observable('default text'),
            text2: $t('default text')
        },

        initialize(){
            this._super();

            setTimeout(()=>{
                this.text('update text');
            }, 3000)
        }
    })
});
