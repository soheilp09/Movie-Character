
import { useEffect, useState } from 'react';
import './App.css'
import Header from './components/Header';
import CharacterList from './components/CharacterList';
import CharacterDetail from './components/CharacterDetail';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

function App() {

  const [characters,setCharacters] = useState([]);
  const [isLoading,setIsLoading] = useState(false)
  const [name,setName] = useState("");
  const [selectId,setSelectId] = useState("");


  /// Fetch CharacterList
  useEffect(()=>{
    async function fetchData() {
      try {
        setIsLoading(true);
        const {data} = await axios(`https://rickandmortyapi.com/api/character?name=${name}`);
        setCharacters(data.results);
      } catch (err) {
        toast.error(err.response.data.error);
      } finally{
        setIsLoading(false);
      }
    }
    fetchData();
  },[name]);


  function handelSelectId(id){
setSelectId(id)
  }
  


  return (
    <div className='app container '>
      <Toaster/>
      <Header name={name} setName={setName} ResultLength={characters.length} />
      <div className='main'>
      <CharacterList isLoading={isLoading} characters={characters} onSelectId={handelSelectId}/>

      <CharacterDetail selectId={selectId} />
      </div>
    </div>
  )
}

export default App
