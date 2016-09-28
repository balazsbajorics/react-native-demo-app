"use strict";
const createReducer = (defaultValue, actionType) => (state = defaultValue, action) => {
    if (action.type === actionType) {
        return action.payload;
    }
    return state;
};
const createAction = (actionType) => (payload) => {
    return {
        type: actionType,
        payload,
    };
};
exports.deadSimpleSetter = (defaultValue, actionType) => {
    return {
        reducer: createReducer(defaultValue, actionType),
        action: createAction(actionType),
    };
};
