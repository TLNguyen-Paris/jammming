import styles from './Playlist.module.css'
import TrackList from './../TrackList/TrackList'

const PlayList = ({playlistName, onRemove}) => {

  console.log(playlistName);

  return (
    <div className={styles.Playlist}>
      <input value="New Playlist"/>
      <TrackList 
        onRemove={onRemove}
      />
      <button className={styles.PlaylistSave}>SAVE TO SPOTIFY</button>
    </div>
  )
}

export default PlayList