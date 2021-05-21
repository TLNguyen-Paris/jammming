import styles from './TrackList.module.css'
import Track from './../Track/Track'

const TrackList = (props) => {
  const {searchResults, onAdd, onRemove} = props

  return (
    <div className={styles.TrackList}>
      {
        searchResults?.map( (track,index)  => {
          return (
            <div className={styles.Track} key={index}>
              <Track 
                track={track} 
                onAdd={onAdd}
                onRemove={onRemove}
              />
            </div>
          )
        })
      }
    </div>
  )
}

export default TrackList