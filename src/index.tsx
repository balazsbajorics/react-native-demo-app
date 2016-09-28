import * as React from 'react'
import { Component } from 'react'
import {
    AppRegistry,
} from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import { reducers } from './redux'
import { MainScreenController } from './ui/MainScreen'


const store = createStore(reducers)

class EntryPoint extends Component<any, any> {
    render() {
        return (<Provider store={store}><MainScreenController /></Provider>)
    }
}

AppRegistry.registerComponent('ReactReduxTS', () => EntryPoint)
