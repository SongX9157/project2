export const Action = Object.freeze({
    LoadMemories: 'LoadMemories',
});

export function loadMemories(datas){
    return{
        type: Action.LoadMemories,
        payload: datas,
    };
}

function checkForErrors(response){
    if(!response.ok){
        throw Error(`${response.status}: ${response.statusText}`);
    }
    return response;
}

const host = 'https://steem.duckdns.org:8442';

export function loadMessage(developer){
    return dispatch=>{
        fetch(`${host}/games/${developer}`)
        .then(checkForErrors)
        .then(response => response.json())
        .then(data =>{
            if(data.ok){
                dispatch(loadMemories(data.games));
            }
        })
    .catch(e=>console.error(e));
    } ;
}