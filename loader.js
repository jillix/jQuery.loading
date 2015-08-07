exports.init = function (targetDOM) {
    var self = this;
    var t = document.createTextNode("This is the loader");

    document.getElementsByTagName(self._config.targetDOM).appendChild(t);
}
