define(['uiComponent', 'ko'], (uiComponent, ko)=>{
    'use strict'

    return uiComponent.extend({
        defaults: {
            template: 'Magento_Theme/custom',
            // isActive: ko.observable(true),
            // text: ko.observable('default text'),
            // items: ko.observableArray(['item', 'item'])

            // трекові обсерви
            isActive: true,
            text: 'default text',
            items: ['item', 'item'],
            tracks: {
                text: true,
                items: true,
                isActive: true
            }
        },

        // спрацьовує раніше за initialize() і має повертати return this;
        initObservable() {
            this._super();

            // console.log(this.text);
            // this.text = ko.observable(this.text);

            this.observe('text');

            return this;
        },

        initialize() {
            this._super();

            setTimeout(()=>{
                // this.isActive(false);
                // this.text('update text');
                this.items.push('item');

                // трекові обсерви
                this.isActive=false;
                this.text='update text';

            }, 3000);
        },
    })
});
