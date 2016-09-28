const createReducer = <T>(defaultValue: T, actionType: string) => (state: T = defaultValue, action: any) => {
    if (action.type === actionType) {
        return action.payload
    }
    return state
}

const createAction = <T>(actionType: string) => (payload: T) => {
    return {
        type: actionType,
        payload,
    }
}

export const deadSimpleSetter = <T>(defaultValue: T, actionType: string) => {
    return {
        reducer: createReducer<T>(defaultValue, actionType),
        action: createAction<T>(actionType),
    }
}
