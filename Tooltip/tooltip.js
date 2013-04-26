YUI().add('tooltip-plugin', function (Y) {

    var Lang = Y.Lang;

    ChartPlugin = Y.Base.create('tooltipPlugin', Y.Plugin.Base, [], {
        initializer: function () {
            if (this.get('rendered')) {
                this.addCssClass();
            } else {
                this.afterHostMethod('renderUI', this.addCssClass);
            }
        },
        addCssClass: function (){
            var boundingBox = this.get('host');
            var cssClassConfig = this.get('cssClassConfig'),
            percentage = this.get('percentage');
            var max_range = 0;
            var limit;
            for(var key in cssClassConfig) {
                var key_num = key * 1;
                if(percentage > key_num && key_num > max_range){
                    max_range = key_num;
                    limit = key;
                }
            }
            Y.log(cssClassConfig[limit]);
            boundingBox.addClass(cssClassConfig[limit]);
        }
    }, {
        NS:'tooltip',
        ATTRS : {
            animation: {
                value: true,
                validator: Lang.isBoolean
            },
            position: {
                value: 'right',
                validator: Lang.isString
            },
            title: {
                value: '',
                validator: Lang.isString
            },
            trigger: {
                value: 'hover',
                validator: Lang.isString
            },
            delay: {
                value: 0,
                validator: Lang.isNumber
            },
            template : {
                value: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                validator: Lang.isString
            }
        }

    });
}, '1.0', { requires: ['base-build', 'plugin', 'node'] });

YUI().use( 'tooltip-plugin', 'node', function (Y) {

});
