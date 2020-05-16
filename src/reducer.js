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
        default:
            return state;
    }
}

export default reducer;