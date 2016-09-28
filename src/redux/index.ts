import { combineReducers } from 'redux'

import { deadSimpleSetter } from './simpleSetter'


export const { reducer: title, action: setTitle } = deadSimpleSetter<string>('hello', 'SET_TITLE')

export interface State {
    title: string
}
export const reducers = combineReducers<State>({
    title,
})
