"use strict";
const React = require('react');
const react_1 = require('react');
const react_native_1 = require('react-native');
const fontFamily = (react_native_1.Platform.OS === 'ios') ? 'menlo' : 'monospace';
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#282c34',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#A768BA',
        fontFamily: fontFamily,
    },
    instructions: {
        textAlign: 'center',
        color: '#A8AFBB',
        marginBottom: 5,
        fontFamily: fontFamily,
    },
});
const ReactReduxTS = (props) => {
    return (React.createElement(react_native_1.View, {style: { flex: 1 }}, 
        React.createElement(react_native_1.StatusBar, {backgroundColor: '#282c34', barStyle: 'light-content'}), 
        React.createElement(react_native_1.View, {style: styles.container}, 
            React.createElement(react_native_1.Text, {style: styles.welcome}, "Hello World"), 
            React.createElement(react_native_1.Text, {style: styles.instructions}, "To get started, edit index.ios.js"), 
            React.createElement(react_native_1.Text, {style: styles.instructions}, 
                "Press Cmd+R to reload,", 
                '\n', 
                "Hello world Cica"))));
};
class EntryPoint extends react_1.Component {
    render() {
        return (React.createElement(ReactReduxTS, null));
    }
}
react_native_1.AppRegistry.registerComponent('ReactReduxTS', () => EntryPoint);
