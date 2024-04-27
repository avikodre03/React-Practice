export const Reducerfn=(state,action)=>{
    switch (action.type) {
        case 'INCREASE':
                return (state = {
                    ...state,
                    count: state.count + action.payload
                })
                case "DECREASE":
                    return (state={
                        ...state,
                        count:state.count - action.payload
                    })
                case "RESET":
                    return (state={
                        ...state,
                        count:0
                    })
    }
return state
}