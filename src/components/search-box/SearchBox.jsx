import './SearchBox.css'

const SearchBox = ({ className, onSearchChangeHandler, placeHolder }) => (
  <input 
    className={`search-box ${className}`} 
    type="search" placeholder={placeHolder} 
    onChange={onSearchChangeHandler}/>
);

export default SearchBox;