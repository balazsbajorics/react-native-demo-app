import * as React from 'react'
import {
    StatusBar,
    View,
} from 'react-native'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'

import { State, setTitle, textInput } from '../redux'
import { styles } from './style'
import { LabeledField } from './LabeledField'
import { TextInputField } from './TextInputField'
import { ChangeButton } from './ChangeButton'


interface MainScreenProps {
    title: string
    editedTextValue: string
    onTextInput: (text: string) => void
    onSetTitle: (text: string) => void
}
const MainScreen = ({ title, editedTextValue, onTextInput, onSetTitle }: MainScreenProps) => {
    return (
        <View style={{ flex: 1 }}>
            <StatusBar
                backgroundColor='#282c34'
                barStyle='light-content'
            />
            <View style={styles.container}>
                <LabeledField label='title' value={title} />
                <LabeledField label='textInputValue' value={editedTextValue} />
                <TextInputField textInput={editedTextValue} onTextInput={onTextInput} />
                <ChangeButton onPress={() => onSetTitle(editedTextValue)} />
            </View>
        </View>
    )
}

const mapStateToProps = (state: State) => {
    return {
        title: state.title,
        editedTextValue: state.textInputValue,
    }
}
const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        onTextInput: (text: string) => dispatch(textInput(text)),
        onSetTitle: (text: string) => dispatch(setTitle(text)),
    }
}
export const MainScreenContainer = connect(mapStateToProps, mapDispatchToProps)(MainScreen)
