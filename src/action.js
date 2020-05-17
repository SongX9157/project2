export const Action = Object.freeze({
    LoadMemories: 'LoadMemories',
    finishiAddingMessage: 'finishiAddingMessage',
    loadMemoriesTag: 'loadMemoriesTag',
    finishiAddingTag: 'finishiAddingTag',
});

export function loadMemories(datas){
    return{
        type: Action.LoadMemories,
        payload: datas,
    };
}

export function loadMemoriesTag(datas2){
    return{
        type: Action.loadMemoriesTag,
        payload: datas2,
    }
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

export function loadTag(){
    return dispatch=>{
        fetch(`${host}/tags/`)
        .then(checkForErrors)
        .then(response => response.json())
        .then(data =>{
            if(data.ok){
                dispatch(loadMemoriesTag(data.tags));
            }
        })
    .catch(e=>console.error(e));
    } ;
}

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

export function startAddingMessage(year,month,day, message){
    const memory ={year, month,day, message,gamename:"xenoblade"};
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

export function startAddingTag(style){
    const memory ={style};
    const options = {
        method: 'POST',
        headers:{
         'Content-Type': 'application/json',
    },
    body: JSON.stringify(memory),
}
    return dispatch=>{
        fetch(`${host}/tags`, options)
        .then(checkForErrors)
        .then(response => response.json())
        .then(data =>{
            if(data.ok){
                memory.id = data.id;
                dispatch(finishiAddingTag(memory));
            }
        })
    .catch(e=>console.error(e));
    } ;
}

export function finishiAddingTag(memory){
    return{
        type: Action.finishiAddingMessage,
        payload: memory,
    };
}

