// import {UserType} from '../HW8'

import {UserType} from "../HW8";

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            if (action.payload === 'up') {
                const copyState = [...state]
                const sortedArray = copyState.sort(function (a, b) {
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (a.name < b.name) {
                        return -1;
                    }
                    return 0;
                })
                return sortedArray
            } else if (action.payload === 'down') {
                const copyState = [...state]
                const sortedArray = copyState.sort(function (a, b) {
                    if (a.name < b.name) {
                        return 1;
                    }
                    if (a.name > b.name) {
                        return -1;
                    }
                    return 0;
                })
                return sortedArray
            }
            return state // need to fix
        }
        case 'check': {
            const olderThenEighteen = [...state].filter(el => el.age >= 18);
            return olderThenEighteen // need to fix
        }
        default:
            return state
    }
}
