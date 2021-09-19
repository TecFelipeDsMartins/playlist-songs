import { useState } from 'react';
import './App.css';
import PlayList from './components/PlayList'

const data = {
  name: "Classic Disney Movie Songs - top 10",
  songs: [
    {
      songName: "A whole new world",
      movieTitle: "Aladdin",
      duration: "2:40"
    },
    {
      songName: "Let It Go",
      movieTitle: "Frozen",
      duration: "3:45"
    },
    {
      songName: "Circle of Life",
      movieTitle: "Lion King",
      duration: "4:51"
    },
    {
      songName: "How far I'll Go",
      movieTitle: "Moana",
      duration: "2:44"
    },
    {
      songName: "I'll Make a Man Out Of You",
      movieTitle: "Mulan",
      duration: "3:41"
    },
    {
      songName: "Bare Necessities",
      movieTitle: "The Jungle Book",
      duration: "4:15"
    }
  ]
}

function App({user="Mickey"}) {
  const [ playListName, setPlayListName ] = useState(data.name)
  const [ songs, setSongs ] = useState(data.songs)


  const addSong = (newSong) => {
    setSongs(current => [...current, newSong])
  }

  const playlist = { name: playListName, songs: songs}

  return (
    <div className="App">
      <h1>{user}'s PlayList </h1>
      <PlayList playlist={playlist} addSong={addSong} />
    </div>
  );
}

export default App;
