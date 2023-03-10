const initState = {
    isLoading: false,
}
type IsLoadingStateType = {
    isLoading:boolean
}
export type ActionsTypes = LoadingActionType

export const loadingReducer = (state = initState, action: ActionsTypes): IsLoadingStateType => { // fix any
    switch (action.type) {
        // пишет студент  // need to fix
        case 'CHANGE_LOADING' : {
            return {...state,isLoading:action.isLoading}
        }

        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
