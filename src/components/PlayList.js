import { useState } from 'react'
import AddTrack from './AddTrack'
import Track from './Track'


const PlayList = (props) => {
  const [status, setStatus] = useState('Paused...')
  const [currentSongIdx, setCurrentSongIdx] = useState(null)


  const handleOnPlayPauseClick = () => {
    if(status === "Paused..."){
      setStatus("Playing...")
    } else if (status === "Playing..."){
      setStatus("Paused...")
    }
  }

  const handleOnTrackClick = (idx) => {
    setCurrentSongIdx(idx)
    setStatus("Playing...")
  }

  const handleOnNextSongClick = () => {
    if(!currentSongIdx && currentSongIdx !== 0){
      setCurrentSongIdx(0)
     
    } else {
      let nextSongIdx = currentSongIdx +1
      if(nextSongIdx >= props.playlist.songs.length){
        nextSongIdx = 0
      }
      setCurrentSongIdx(nextSongIdx)
    }
    setStatus("Playing...")
  }

  const handleOnPrevSongClick = () => {
    if(!currentSongIdx && currentSongIdx !== 0){
      setCurrentSongIdx(0)
     
    } else {
      let prevSongIdx = currentSongIdx -1
      if(prevSongIdx < 0 ){
        prevSongIdx = props.playlist.songs.length -1
      }
      setCurrentSongIdx(prevSongIdx)
    }
    setStatus("Playing...")
  }
  const activeTrack = Boolean(currentSongIdx) || currentSongIdx === 0 ? props.playlist.songs[currentSongIdx] : null

  return(
    <div className="playlist">
      
      <div className="info">
        <span className="status">{status}</span>
        <p className="title">{props.playlist.name}</p>
      </div>  
      
      <div className="controls">
        <div className="audio">
          <audio preload="false" controls></audio>
        </div>
        <div className="buttons">
          <button className="btn" onClick={handleOnPrevSongClick}>&larr;</button>
          <div className="button-play-pause">
            <span className={status === "Paused..." ? "paused" : "playing"} onClick={handleOnPlayPauseClick}></span>
          </div>
          <button className="btn" onClick={handleOnNextSongClick}>&rarr;</button>
        </div>
        <div className="current-song">
          <span>
            {activeTrack ? (
              <>
                {currentSongIdx + 1}. {activeTrack.songName}
              </>
            ): null}
          </span>
        </div>
      </div> 
      <ul className="Tracks">
        {props.playlist.songs.map((song, idx)=>(
          <Track song={song} key={song.songName} position={idx + 1} onTrackClick={handleOnTrackClick}/>
      
          ))}
      </ul>

      <AddTrack addSong={props.addSong}/>
    </div>
  )
}

export default PlayList