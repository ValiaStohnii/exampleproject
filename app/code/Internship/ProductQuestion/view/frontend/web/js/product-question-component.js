define(
    [
        'jquery',
        'Magento_Ui/js/modal/modal'
    ],
    function(
        $,
        modal
    ) {
        return function () {
            let options = {
                type: 'popup',
                responsive: true,
                innerScroll: true,
                title: 'Ask question',
                buttons: [{
                    text: $.mage.__('Close'),
                    class: 'modal-close',
                    click: function () {
                        this.closeModal();
                    }
                }]
            };
            let productQuestion = modal(options, $('#productQuestion'));
            $("#questionButton").on('click',function(){
                $("#productQuestion").modal("openModal");
            });
            $("#productQuestion").modal({
                opened: function () {
                    $('.submitQuestion').on('click', function () {
                        console.log('click submit')
                    })
                }
                }
            );
        }
    });
