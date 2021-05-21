import './App.css';
import SearchBar from './../SearchBar/SearchBar'
import SearchResults from './../SearchResults/SeachResults';
import PlayList from './../PlayList/Playlist'
import {useState} from 'react'

function App() {

  const [playlistName, setplaylistName] = useState('My playlisturu')
  const [playlistTracks, setplaylistTracks] = useState('')
  const [searchResults, setsearchResults] = useState([
    {
      name:"Aled",
      album:"Cshian",
      artist:"Sal"
    },
    {
      name:"Prout",
      album:"Ameno",
      artist:"Dorime"
    },
    {
      name:"Kour",
      album:"Zesas",
      artist:"Geal"
    }
  ])

  const addTrack = (track) => {
    if (track.id) {
      setplaylistTracks( (currentPlaylist) => [...currentPlaylist, track])
    }
  }

  const removeTrack = (track) => {
    const playlist = playlistTracks.filter( el => {
      if(track.id === el.id){
        return el
      }
      setplaylistTracks(playlist)
    })
  }

  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults 
            searchResults={searchResults}
            onAdd={addTrack}
          />
          <PlayList 
            playlistName={playlistName} 
            onRemove={removeTrack}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
