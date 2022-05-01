export const activeType = {
    SET_USER: 'SET_USER'
}

export const reducer = (state, action) => {
    switch (action.type) {
        case activeType.SET_USER:
            return {
                ...state,
                user: action.user
            };
        
        default:
            return state;

    }
}