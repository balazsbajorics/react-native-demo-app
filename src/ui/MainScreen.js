"use strict";
const React = require('react');
const react_native_1 = require('react-native');
const react_redux_1 = require('react-redux');
const redux_1 = require('../redux');
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
const MainScreen = ({ title, onPress }) => {
    return (React.createElement(react_native_1.View, {style: { flex: 1 }}, 
        React.createElement(react_native_1.StatusBar, {backgroundColor: '#282c34', barStyle: 'light-content'}), 
        React.createElement(react_native_1.View, {style: styles.container}, 
            React.createElement(react_native_1.Text, {style: styles.welcome}, title), 
            React.createElement(react_native_1.TouchableOpacity, {onPress: onPress}, 
                React.createElement(react_native_1.Text, {style: styles.instructions}, "Tap here to change the title")
            ))));
};
const mapStateToProps = (state) => {
    return {
        title: state.title,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onPress: () => dispatch(redux_1.setTitle('it works!')),
    };
};
exports.MainScreenController = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(MainScreen);
