import * as React from 'react'
import {
    Text,
    TextInput,
    View,
} from 'react-native'
import { styles } from './style'


interface TextInputFieldProps {
    textInput: string
    onTextInput: (text: string) => void
}

export const TextInputField = ({ textInput, onTextInput }: TextInputFieldProps) => {
    return (
        <View style={{ alignSelf: 'stretch' }}>
            <Text style={[styles.mono, styles.label]}>
                TextInput
            </Text>
            <TextInput
                style={[styles.mono, styles.title, styles.textInput]}
                onChangeText={onTextInput}
                value={textInput}
            />
        </View>
    )
}
