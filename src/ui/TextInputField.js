"use strict";
const React = require('react');
const react_native_1 = require('react-native');
const style_1 = require('./style');
exports.TextInputField = ({ textInput, onTextInput }) => {
    return (React.createElement(react_native_1.View, {style: { alignSelf: 'stretch' }}, 
        React.createElement(react_native_1.Text, {style: [style_1.styles.mono, style_1.styles.label]}, "TextInput"), 
        React.createElement(react_native_1.TextInput, {style: [style_1.styles.mono, style_1.styles.title, style_1.styles.textInput], onChangeText: onTextInput, value: textInput})));
};
