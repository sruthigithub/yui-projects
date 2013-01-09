YUI.add('charts', function(Y) {
    var Lang = Y.Lang,
    Node = Y.Node,
    JSON = Y.JSON;

    Y.Charts = Y.Base.create('charts', Y.Widget, [], {
        initializer: function (){
            Y.log("reached charts initializer");
        },
        getBarCssClass: function (){
            var cssClassConfig = this.get('cssClassConfig'),
            srcNode = this.get('srcNode'),
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
            return config[limit];
        },
        renderUI: function (){
            var cssClass = this.getBarCssClass();
            this.get('contentBox').addClass(cssClass);
        }
    }, {
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
        visibleWhenInfinite: {
            value: false,
            validator: Lang.isBoolean
        },
        renderHTML: {
            value:false,
            validator: Lang.isBoolean
        },
        percentage : {
            value:0,
            validator: Lang.isNumber
        },
        container : {
            value: {},
            validator:Lang.isObject
        }
    }
});
}, "1.0.0", {
    requires: ['base-build', 'widget', 'node'] });

YUI().use('charts', function (Y) {
    var progressBars = Y.all('#content-stats .progress');
    progressBars.each(function(node){
            var bar = node,
            percent = node.getAttribute('data-percentage');
            var c = new Y.Charts( {percentage: percent, cssClassConfig: {"30":'progress-success',
                "60":'progress-warning',
                "0":'progress-info',
                 "90":'progress-danger'}, container: node});
            c.render(node);
        });
});