function convertActionToName(actionType) {
    return actionType.toLowerCase().replace(/_(\w)/g, v => v[1].toUpperCase());
}

export default function createReducer(state, action, handlers) {
    const key = convertActionToName(action.type);
    const handler = handlers[key]
    if (handler)
        handler(state, action);
}