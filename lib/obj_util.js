"use strict";
var mergeObject = exports.mergeObject = function(object1, object2){
    var resobj = {};
    Object.keys(object1).forEach(function(key){
        resobj[key] = object1[key];
    })
    Object.keys(object2).forEach(function(key){
        resobj[key] = object2[key];
    })
    return resobj;
}
var sortObject = exports.sortObject = function(obj){
    var resobj = {};
    Object.keys(obj).sort().forEach(function(key){
        resobj[key] = obj[key];
    })
    return resobj;
}