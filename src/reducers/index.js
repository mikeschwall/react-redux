import { combineReducers } from "redux";

export const songsReducer = () => {
    return [
        {title:"song 1"},
        {title:"song 2"},
        {title:"song 3"},
        {title:"song 4"},
        {title:"song 5"}
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
    songs:songsReducer,
    selectedSong: selectSongReducer
})