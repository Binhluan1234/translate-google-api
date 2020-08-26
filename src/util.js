"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function arrayStringify(data) {
    return data.map(function (item) { return encodeURIComponent(item); }).join('?%20');
}
exports.arrayStringify = arrayStringify;
function parseMultiple(list) {
    const size = list.length;
    var translateMap = list.map(function (item, index) {
        var text = item[0];
        if (text.indexOf('<b>') > -1) {
            return rmHtml(text);
        }
        if (index === size - 1) return text;
        return text.trim().replace(/\?$/, '');
    });
    return translateMap;
}
exports.parseMultiple = parseMultiple;
function rmHtml(value) {
    return value.match(/<b>(.*?)<\/b>/g).map(function (item) { return item.match(/<b>(.*)<\/b>/)[1]; }).join('');
}
