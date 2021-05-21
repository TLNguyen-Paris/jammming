// import styles from './Track.module.css'
import styles from './Track.module.css'

const Track = ({track, onAdd, onRemove}) => {

  // const renderAction = () => {
  //   if(isRemoval){
  //     return <button className="Track-action" onClick={onRemove}>-</button>
  //   } else {
  //     return <button className="Track-action" onClick={addTrack}>+</button>
  //   }
  // }

  const addTrack = () => {
    onAdd(track)
  }

  const removeTrack= () => {
    onRemove(track)
  }

  return (
    <div className={styles.Track}>
      <div className={styles.TrackInformation}>
        <h3>{track.name}</h3>
        <p>{track.artist} | {track.album}</p>
      </div>
      {/* <button className="Track-action"><!-- + or - will go here --></button> */}
    </div>
  )
}

export default Track