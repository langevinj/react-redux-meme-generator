const INITIAL_STATE = { memes: [] }

function rootReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case "ADD":
            return { ...state, memes: [...state.memes, action.payload]};

        case "DELETE":
            return { ...state, memes: state.memes.filter(meme => action.payload.id !== meme.id)};
        
        default:
            return state;
    }
}

export default rootReducer;

