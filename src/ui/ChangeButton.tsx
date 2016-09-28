import * as React from 'react'
import {
    Text,
    TouchableOpacity,
} from 'react-native'
import { styles } from './style'


interface ChangeButtonProps {
    onPress: () => void
}
export const ChangeButton = ({ onPress }: ChangeButtonProps) => {
    return (
        <TouchableOpacity style={{alignSelf: 'stretch'}} onPress={onPress}>
            <Text style={[styles.mono, styles.button]}>
                Change
            </Text>
        </TouchableOpacity>
    )
}
