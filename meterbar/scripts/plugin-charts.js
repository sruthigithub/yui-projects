YUI().add('charts-plugin', function (Y) {

    var Lang = Y.Lang;
    ChartPlugin = Y.Base.create('chartplugin', Y.Plugin.Base, [], {
        initializer: function () {
            if (this.get('rendered')) {
                this.addCssClass();
            } else {
                this.afterHostMethod('renderUI', this.addCssClass);
            }
        },
        addCssClass: function (){
            var boundingBox = this.get('host');
            Y.log(boundingBox);
            var cssClassConfig = this.get('cssClassConfig'),
            percentage = this.get('percentage');
            Y.log(percentage);
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
        NS:'meterbar',
        ATTRS : {
            cssClassConfig: {
                value:{
                     "30"  :'progress-success',
                     "60"  :'progress-warning',
                     "0"    :'progress-info',
                      "90" :'progress-danger'
                },
                validator: Lang.isObject
            },
            percentage : {
                value: 0,
                validator: Lang.isNumber
            }
        }

    });
}, '1.0', { requires: ['base-build', 'plugin', 'node'] });

YUI().use( 'charts-plugin', 'node', function (Y) {
    //var progressBars = Y.all('#content-stats .progress');
    Y.all('[data-percentage]').each(function(n){
            var bar = n,
            percent = n.getAttribute('data-percentage');
            Y.log(percent);
            n.plug(ChartPlugin, {percentage: percent*1});
            n.meterbar.addCssClass();
        });

});
