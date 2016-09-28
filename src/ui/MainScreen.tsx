import * as React from 'react'
import {
    Platform,
    StatusBar,
    StyleSheet,
    Text,
    TextStyle,
    TouchableOpacity,
    View,
    ViewStyle,
} from 'react-native'
import { connect } from 'react-redux'

import { State, setTitle } from '../redux'


const fontFamily = (Platform.OS === 'ios') ? 'menlo' : 'monospace'

type Styles = {
    container: ViewStyle,
    welcome: TextStyle,
    instructions: TextStyle
};

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

interface MainScreenProps {
    title: string
    onPress: () => void
}
const MainScreen = ({ title, onPress }: MainScreenProps) => {
    return (
        <View style={{ flex: 1 }}>
            <StatusBar
                backgroundColor='#282c34'
                barStyle='light-content'
            />
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    {title}
                </Text>
                <TouchableOpacity onPress={onPress}>
                    <Text style={styles.instructions}>
                        Tap here to change the title
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const mapStateToProps = (state: State) => {
    return {
        title: state.title,
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        onPress: () => dispatch(setTitle('it works!')),
    }
}
export const MainScreenController = connect(mapStateToProps, mapDispatchToProps)(MainScreen)
