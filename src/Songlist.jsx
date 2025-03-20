import { useDispatch, useSelector } from "react-redux";
import { addSong, removeSong } from "./store/slices/Songslice";
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
        <div style={{width:"100%"}}>
            <button onClick={() => handleAdd({title:"Song 5"})}>add song</button> 
            <button onClick={() => handleReset()}>Reset</button>
            <h2>Songs</h2>
            {songs && songs.map(item => <li key={item.title}>{item.title} 
                <button onClick={() => handleRemove(item.title)} style={{margin:"5px"}}>x</button>
            </li>)}
        </div>
    )
}

export default SongList;