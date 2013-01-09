YUI().use('plugin', function (Y) {
window.Yn = Y;
function ChartsPlugin(config) {
    //this._node = config.host;
}
ChartsPlugin.NS = "meterbar";

ChartsPlugin.prototype = {
        renderChart: function() {
            //var node = this._node;
            Y.log("reached here");
        }
};

});

YUI().use( 'ChartsPlugin', 'node', function (Y) {
    var progressBars = Y.all('#content-stats .progress');
    progressBars.each(function(n){
            var bar = n,
            percent = n.getAttribute('data-percentage');
            n.plug(Y.ChartsPlugin);
            //n.charts.renderChart();
        });

});
