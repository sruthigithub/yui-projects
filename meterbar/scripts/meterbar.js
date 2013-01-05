YUI().use('node', function (Y) {
     //For debugging in the console as Y is used in by other parts of cPanel in the Y = YAHOO (2) context.
    window.Yn = Y;

    var PAGE_DIRECTION = PAGE_DIRECTION || Y.one('html')._node.dir;

    var Utils = {},
          App ={};

    Utils = {
            //TODO: fix categories and pages performance
            /* Cache commonly used DOM elements */
            elements: {
                progressBars: Y.all('#content-stats .progress')
            }

        };

    App = {
        getProgressbarState: function(percentage, config){
            var percent = percentage * 1;
            if(!config) {
                config = {"0":'zero',
                "20":'twenty',
                 "40":'forty',
                 "60":'sixty'};
            }
            var range = 0;
            var state;
            for(var key in config) {
                var upperLimit = key*1;
                if(percent > upperLimit && upperLimit > range){
                    range = upperLimit;
                    state = key;
                }
            }
            return config[state];

        }

    };

    Utils.elements.progressBars.each(function(node){
            var bar = node,
            percentage = node.getAttribute('data-percentage');
            var state = App.getProgressbarState(percentage,
                {
                 "30":'progress-success',
                "60":'progress-warning',
                "0":'progress-info',
                 "90":'progress-danger'});
            node.addClass(state);
            });
});