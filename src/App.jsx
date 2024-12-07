
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
  const [sort,setSort] = useState("All");
  const [favouriteList,setFavouriteList] = useState([])


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
  };

  function handelFavourite(char) {
  setFavouriteList([...favouriteList,char]);
  }

  const IsAddedToFavList = favouriteList.map((item)=>item.id).includes(selectId);
  
  //Sort Data
  let SortedData = characters;
  if(sort === "Dead"){
    SortedData = characters.filter((item)=> item.status === "Dead")
  };
  if(sort === "Alive"){
    SortedData = characters.filter((item)=>item.status === "Alive")
  }
  if(sort === "Female"){
    SortedData = characters.filter((item)=>item.gender === "Female")
  }
  if(sort === "Male"){
    SortedData = characters.filter((item)=>item.gender === "Male")
  }
  
  
  

  return (
    <div className='app container '>
      <Toaster/>
      <Header favouriteList={favouriteList} sort={sort} setSort={setSort} name={name} setName={setName} ResultLength={SortedData.length} />
      <div className='main'>
      <CharacterList isLoading={isLoading} characters={SortedData} onSelectId={handelSelectId}/>

      <CharacterDetail IsAddedToFavList={IsAddedToFavList} selectId={selectId} onAddFavourite={handelFavourite} />
      </div>
    </div>
  )
}

export default App;
