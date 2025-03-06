import { useDispatch, useSelector } from "react-redux";
import { selectSong } from "../actions";

const SongList = () => {

    const songs = useSelector(state => state.songs);
    const selectedSong = useSelector(state => state.selectedSong);
    const dispatch = useDispatch();

    const handleSelect = (song) => {
        dispatch(selectSong(song))
    }

    return (
        <div>
            <h2>
                {selectedSong && selectedSong.title}
            </h2>
            {songs && songs.map(item => <li key={item.title}>{item.title} 
                <button onClick={() => handleSelect(item)}>select</button></li>)}
        </div>
    )
}

export default SongList;