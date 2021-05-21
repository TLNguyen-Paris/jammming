import styles from './SearchResults.module.css'
import TrackList from './../TrackList/TrackList'

const SearchResults = (props) => {
  const {searchResults, onAdd} = props

  return (
    <div className={styles.SearchResults}>
      <h2>Results</h2>
      <TrackList 
        searchResults={searchResults}
        onAdd={onAdd}
      />
    </div>
  )
}

export default SearchResults