const initialState = {
    isWaiting: false,
    datas : [
        {id:1, month: 1, day: 20,message: "Good game." },
        {id:1, month: 3, day: 12,message: "Not good for the new player." },
      ],
};
function reducer(state = initialState, action){
    return state;
}

export default reducer;