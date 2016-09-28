import {
    Platform,
    StyleSheet,
    TextStyle,
    ViewStyle,
} from 'react-native'

const fontFamily = (Platform.OS === 'ios') ? 'menlo' : 'monospace'

type Styles = {
    container: ViewStyle,
    mono: TextStyle,
    title: TextStyle,
    button: TextStyle,
    label: TextStyle,
    textInput: TextStyle,
};

export const styles = StyleSheet.create<Styles>({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#282c34',
        paddingTop: 60,
    },
    mono: {
        fontFamily: fontFamily,
        color: '#A8AFBB',
        fontSize: 14,
    },
    title: {
        fontSize: 30,
        margin: 10,
        height: 40,
    },
    button: {
        fontSize: 20,
        margin: 10,
        color: '#A768BA',
        textAlign: 'center',
    },
    label: {
        marginLeft: 5,
        marginBottom: 0,
    },
    textInput: {
        flex: 1,
        color: '#7e9f66',
    },
})
