"use strict";
const React = require('react');
const react_native_1 = require('react-native');
const style_1 = require('./style');
exports.LabeledField = ({ label, value }) => {
    return (React.createElement(react_native_1.View, null, 
        React.createElement(react_native_1.Text, {style: [style_1.styles.mono, style_1.styles.label]}, label), 
        React.createElement(react_native_1.Text, {style: [style_1.styles.mono, style_1.styles.title]}, value)));
};
