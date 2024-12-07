import {allCharacters} from '../data/data'
import { useState } from 'react';
import './App.css'
import Header from './components/Header';
import CharacterList from './components/CharacterList';
import CharacterDetail from './components/CharacterDetail';

function App() {

  const [characters,setCharacters] = useState(allCharacters);

  return (
    <div className='app container '>
      <Header ResultLength={characters.length} />
      <div className='main'>

      <CharacterList characters={characters}/>

      <CharacterDetail />
      </div>
    </div>
  )
}

export default App
