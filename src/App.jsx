
import { useEffect, useState } from 'react';
import './App.css'
import Header from './components/Header';
import CharacterList from './components/CharacterList';
import CharacterDetail from './components/CharacterDetail';
import axios from 'axios';
import toast, { ToastBar, Toaster } from 'react-hot-toast';

function App() {

  const [characters,setCharacters] = useState([]);
  const [isLoading,setIsLoading] = useState(false)


  /// Fetch CharacterList
  useEffect(()=>{
    async function fetchData() {
      try {
        setIsLoading(true);
        const {data} = await axios("https://rickandmortyapi.com/api/character");
        setCharacters(data.results);
      } catch (err) {
        toast.error(err.response.data.error);
      } finally{
        setIsLoading(false);
      }
    }
    fetchData();
  },[])



  return (
    <div className='app container '>
      <Toaster/>
      <Header ResultLength={characters.length} />
      <div className='main'>
      <CharacterList isLoading={isLoading} characters={characters}/>

      <CharacterDetail />
      </div>
    </div>
  )
}

export default App
