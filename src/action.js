export const Action = Object.freeze({
    LoadMemories: 'LoadMemories',
    finishiAddingMessage: 'finishiAddingMessage',
});

export function loadMemories(datas){
    return{
        type: Action.LoadMemories,
        payload: datas,
    };
}

export function finishiAddingMessage(memory){
    return{
        type: Action.finishiAddingMessage,
        payload: memory,
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

export function startAddingMessage(year,month, message){
    const memory ={year, month, message,developer:"xenoblade"};
    const options = {
        method: 'POST',
        headers:{
         'Content-Type': 'application/json',
    },
    body: JSON.stringify(memory),
}
    return dispatch=>{
        fetch(`${host}/games`, options)
        .then(checkForErrors)
        .then(response => response.json())
        .then(data =>{
            if(data.ok){
                memory.id = data.id;
                dispatch(finishiAddingMessage(memory));
            }
        })
    .catch(e=>console.error(e));
    } ;
}