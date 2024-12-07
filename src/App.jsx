
import { useEffect, useState } from 'react';
import './App.css'
import Header from './components/Header';
import CharacterList from './components/CharacterList';
import CharacterDetail from './components/CharacterDetail';
import axios from 'axios';

function App() {

  const [characters,setCharacters] = useState([]);


  /// Fetch CharacterList
  useEffect(()=>{
    async function fetchData() {
      try {
        const {data} = await axios("https://rickandmortyapi.com/api/character");
        setCharacters(data.results);
      } catch (err) {
        console.log(err.response.data.error);
      }
    }
    fetchData();
  },[])



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
