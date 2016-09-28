import * as React from 'react'
import {
    Text,
    View,
} from 'react-native'
import { styles } from './style'


interface LabeledFieldProps {
    label: string
    value: string
}

export const LabeledField = ({ label, value }: LabeledFieldProps) => {
    return (
        <View>
            <Text style={[styles.mono, styles.label]}>
                {label}
            </Text>
            <Text style={[styles.mono, styles.title]}>
                {value}
            </Text>
        </View>
    )
}
