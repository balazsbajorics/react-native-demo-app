"use strict";
const React = require('react');
const react_1 = require('react');
const react_native_1 = require('react-native');
const redux_1 = require('redux');
const react_redux_1 = require('react-redux');
const redux_2 = require('./redux');
const MainScreen_1 = require('./ui/MainScreen');
const store = redux_1.createStore(redux_2.reducers);
class EntryPoint extends react_1.Component {
    render() {
        return (React.createElement(react_redux_1.Provider, {store: store}, 
            React.createElement(MainScreen_1.MainScreenContainer, null)
        ));
    }
}
react_native_1.AppRegistry.registerComponent('ReactReduxTS', () => EntryPoint);
