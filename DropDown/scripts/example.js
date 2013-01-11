// Create a new YUI instance and populate it with the required modules.
YUI().use('plugin', function (Y) {
    // This AnchorPlugin is designed to be added to Node instances (the host will be a Node instance)

function AnchorPlugin(config) {

    // Hold onto the host instance (a Node in this case),
    // for other plugin methods to use.

    this._node = config.host;
}

// When plugged into a node instance, the plugin will be
// available on the "anchors" property.
AnchorPlugin.NS = "anchors";

AnchorPlugin.prototype = {
    disable: function() {
        var node = this._node;
        var anchors = node.queryAll("a");
        anchors.addClass("disabled");
        anchors.setAttribute("disabled", true);
    }
};
});