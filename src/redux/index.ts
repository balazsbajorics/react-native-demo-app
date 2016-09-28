import { combineReducers } from 'redux'

import { deadSimpleSetter } from './simpleSetter'


export const { reducer: title, action: setTitle } = deadSimpleSetter<string>('hello', 'SET_TITLE')
export const { reducer: textInputValue, action: textInput } = deadSimpleSetter<string>('ohai', 'TEXT_INPUT')

export interface State {
    title: string
    textInputValue: string
}
export const reducers = combineReducers<State>({
    title,
    textInputValue,
})
