//getCompteredStyle方法和current方法作用相同，都是获取dom对象的属性，前者不兼容ie8，后者不兼容firefox，这样写可以解决兼容性的问题。
function getStyle(obj, name) {
    if (window.getComputedStyle) {
        return getComputedStyle(obj, null)[name];
    } else {
        return obj.currentStyle[name];
    }
}

//-- 获取outer的宽度
var getOuterWidth = getStyle(outer, "width");//去掉获取到的宽度值的px，使成为number类型的变量，方便计算
var widthObject = getOuterWidth.match(/\d*/);
var width = widthObject[0];