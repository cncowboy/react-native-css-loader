var parseCss = require('gulp-react-native-stylesheet-css/lib/parseCss');

module.exports = function(source) {

	var style = parseCss(source.replace(/\r?\n|\r/g, ""));

    var moduleName = "react-native"
    var objectName = "StyleSheet"
	if (this.withExtendedStyleSheet) {
        moduleName = "react-native-extended-stylesheet"
        objectName = "EStyleSheet"
    }

	prefix = "var " + objectName + " = require('" + moduleName + "')." + objectName + ";\nmodule.exports = " + objectName + ".create(";
	suffix = ");";
	//var prefix = "", suffix = "";
	//prefix = "var React = require('react-native');\nmodule.exports = React.StyleSheet.create(";
	//suffix = ");";
	var content = prefix + style + suffix
    return content;
};