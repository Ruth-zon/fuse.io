import produce from 'immer'
import createReducer from './reducerUtils'

const initalStaste = {
    accountAdress: '',
    tokens: [],
}

const user = {
    setUserProp(state, action) {
        state[action.payload.key] = action.payload.value;
    },
    setTokenSupply(state, action) {
        let index = state.tokens.findIndex(token => token.contractAddress === action.payload.address);
        if (index !== -1)
            state.tokens[index].tokenSupply = action.payload.tokenSupply;
    }
}

export default produce((state, action) => createReducer(state, action, user), initalStaste);