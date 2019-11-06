cordova.define("cordova-plugin-clear-app-data.ClearData", function(require, exports, module) {

var ClearData = {
    clear : function( success, error ) {
        cordova.exec(success, error, "ClearData", "data", [])
    }
};

module.exports = ClearData;

});
