export const Action = Object.freeze({
    LoadMemories: 'LoadMemories',
});

export function loadMemories(datas){
    return{
        type: Action.LoadMemories,
        payload: datas,
    };
}