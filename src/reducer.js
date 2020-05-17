import {Action} from './action';

const initialState = {
    isWaiting: false,
    datas : [],
    tags : [],
};
function reducer(state = initialState, action){
    switch(action.type){
        case Action.LoadMemories:
            return{
                ...state,
                datas: action.payload,

            }
        case Action.loadMemoriesTag:
            return{
                ...state,
                tags: action.payload,
            }
        case Action.finishiAddingMessage:
            return{
                ...state,
                datas: [action.payload, ...state.datas],

            }
        case Action.finishiAddingTag:
            return{
                ...state,
                tags: [action.payload, ...state.datas],

            }
        default:
            return state;
    }
}

export default reducer;