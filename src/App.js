import './App.css';
import CardList from './components/card-list/CardList';
import SearchBox from './components/search-box/SearchBox'
import { useState, useEffect } from 'react';

const App = () => {
  const [ searchText, setSearchText ] = useState('')
  const [ monsters, setMonsters ] = useState([])
  const [ filteredMonsters, setFilteredMonsters ] = useState(monsters)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((monsters) => setMonsters(monsters))
  }, []);
  
  useEffect(() => {
    const monstersFiltered = monsters.filter(m => m.name.toLocaleLowerCase().includes(searchText))
    setFilteredMonsters(monstersFiltered)
  }, [ searchText, monsters ])

  const onSearchChangeHandler = (event) => setSearchText(event.target.value.toLocaleLowerCase())
  return (
    <div>
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox className={"monsters-search-box"} placeHolder={"Search Monster"} onSearchChangeHandler={onSearchChangeHandler}/>
      <CardList cards={filteredMonsters}/>
    </div>
  );
}

export default App;
