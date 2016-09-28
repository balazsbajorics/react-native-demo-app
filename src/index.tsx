import * as React from 'react'
import { Component } from 'react'
import {
    AppRegistry,
    Platform,
    StatusBar,
    StyleSheet,
    Text,
    TextStyle,
    View,
    ViewStyle,
} from 'react-native'

type Styles = {
    container: ViewStyle,
    welcome: TextStyle,
    instructions: TextStyle
};

const fontFamily = (Platform.OS === 'ios') ? 'menlo' : 'monospace'

const styles = StyleSheet.create<Styles>({
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
})

const ReactReduxTS = (props: {}) => {
    return (
        <View style={{ flex: 1 }}>
            <StatusBar
                backgroundColor='#282c34'
                barStyle='light-content'
            />
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Hello World
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.ios.js
                </Text>
                <Text style={styles.instructions}>
                    Press Cmd+R to reload,{'\n'}
                    Hello world Cica
                </Text>
            </View>
        </View>
    )
}

class EntryPoint extends Component<any, any> {
    render() {
        return (<ReactReduxTS />)
    }
}

AppRegistry.registerComponent('ReactReduxTS', () => EntryPoint)
