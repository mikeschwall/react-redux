import { useDispatch, useSelector } from "react-redux";
import { addSong, removeSong } from "./store/slices/songslice";
import { reset } from "./actions";

const SongList = () => {
    const songs = useSelector(state => state.songs);
    const dispatch = useDispatch();

    const handleAdd = (song) => {
        dispatch(addSong(song))
    }

    const handleRemove = (song) => {
        dispatch(removeSong(song))
    }

    const handleReset = () => {
        dispatch(reset());
    }

    return (
        <div>
            <h2>Songs</h2>
            <button onClick={() => handleAdd({title:"song 5"})}>add song</button> 
            <button onClick={() => handleReset()}>reset playlist</button>
            {songs && songs.map(item => <li key={item.title}>{item.title}
                <button style={{color:"#000"}} onClick={() => handleRemove(item.title)}>X</button>
            </li>)}
        </div>
    )
}

export default SongList;