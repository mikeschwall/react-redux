import { useDispatch, useSelector } from "react-redux";
import { selectSong } from "../actions";


const SongList = () => {

    const songs = useSelector(state => state.songs);
    const selectedSong = useSelector(state => state.selectedSong);
    const dispatch = useDispatch();

    const handleClick = (song) => {
        console.log(song)
        dispatch(selectSong(song));
    }

    return (
        <div>
            <h2>Songs</h2>
            {selectedSong && <h5>{selectedSong}</h5>}
            {songs && songs.map(item => <li style={{padding:"10px"}} key={item.title}>{item.title} 
                <button style={{marginLeft:"5px"}} onClick={() => handleClick(item.title)}>select</button>
            </li>)}
        </div>
    )
}

export default SongList;