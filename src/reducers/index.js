import { combineReducers } from "redux";

export const songsReducer = () => {
    return [
        {title:"Song 1"},
        {title:"Song 2"},
        {title:"Song 3"},
        {title:"Song 4"},
        {title:"Song 5"}
    ]
}

export const selectSongReducer = (state = null, action) => {
    switch(action.type) {
        case "SELECT_SONG":
            return action.payload;
        default:
            return state;
    }
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectSongReducer
})