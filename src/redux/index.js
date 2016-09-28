"use strict";
const redux_1 = require('redux');
const simpleSetter_1 = require('./simpleSetter');
_a = simpleSetter_1.deadSimpleSetter('hello', 'SET_TITLE'), exports.title = _a.reducer, exports.setTitle = _a.action;
exports.reducers = redux_1.combineReducers({
    title: exports.title,
});
var _a;
