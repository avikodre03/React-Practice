let initialState = {
    comp1: ""
}

export const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case "comp1":
            state = {
                ...state,
                comp1: action.payload
            }

    }
    return state
}