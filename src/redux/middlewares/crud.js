import { actions } from "../actions";

const url = "https://explorer.fuse.io/api"

export const getTokensList = ({ dispatch }) => next => action => {
    if (action.type === 'GET_TOKENS_LIST') {
        return fetch(`${url}?module=account&action=tokenlist&address=${action.payload.address}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                dispatch(actions.setUserProp({ key: 'tokens', value: data.result }));
            });
    }
    return next(action);
}
export const getTokenSupply = ({ dispatch, getState }) => next => action => {
    if (action.type === 'GET_TOKEN_SUPPLY') {
        let token = getState().userReducer.tokens.find(token => token.contractAddress === action.payload.address);
        if (!token || !token.tokenSupply)
            fetch(`${url}?module=stats&action=tokensupply&contractaddress=${action.payload.address}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                dispatch(actions.setTokenSupply({ address: action.payload.address, tokenSupply: data.result }));
            });
    }
    return next(action);
}