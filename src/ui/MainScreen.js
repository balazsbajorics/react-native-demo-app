"use strict";
const React = require('react');
const react_native_1 = require('react-native');
const react_redux_1 = require('react-redux');
const redux_1 = require('../redux');
const style_1 = require('./style');
const LabeledField_1 = require('./LabeledField');
const TextInputField_1 = require('./TextInputField');
const ChangeButton_1 = require('./ChangeButton');
const MainScreen = ({ title, editedTextValue, onTextInput, onSetTitle }) => {
    return (React.createElement(react_native_1.View, {style: { flex: 1 }}, 
        React.createElement(react_native_1.StatusBar, {backgroundColor: '#282c34', barStyle: 'light-content'}), 
        React.createElement(react_native_1.View, {style: style_1.styles.container}, 
            React.createElement(LabeledField_1.LabeledField, {label: 'title', value: title}), 
            React.createElement(LabeledField_1.LabeledField, {label: 'textInputValue', value: editedTextValue}), 
            React.createElement(TextInputField_1.TextInputField, {textInput: editedTextValue, onTextInput: onTextInput}), 
            React.createElement(ChangeButton_1.ChangeButton, {onPress: () => onSetTitle(editedTextValue)}))));
};
const mapStateToProps = (state) => {
    return {
        title: state.title,
        editedTextValue: state.textInputValue,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onTextInput: (text) => dispatch(redux_1.textInput(text)),
        onSetTitle: (text) => dispatch(redux_1.setTitle(text)),
    };
};
exports.MainScreenContainer = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(MainScreen);
