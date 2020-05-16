import {Action} from './action';

const initialState = {
    isWaiting: false,
    datas : [],
};
function reducer(state = initialState, action){
    switch(action.type){
        case Action.LoadMemories:
            return{
                ...state,
                datas: action.payload,

            }
        case Action.finishiAddingMessage:
            return{
                ...state,
                datas: [action.payload, ...state.datas],

            }
        default:
            return state;
    }
}

export default reducer;