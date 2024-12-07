import { GiLizardman, GiWomanElfFace } from "react-icons/gi"
import {  episodes } from "../../data/data"
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { SiMonster } from "react-icons/si";


function CharacterDetail({selectId}) {

  const [character,setCharacter] = useState(null);

  //Fetch A Single Character
  useEffect(()=>{
    async function FetchData() {
      try {
        const {data} = await axios.get(`https://rickandmortyapi.com/api/character/${selectId}`);
        setCharacter(data);
      } catch (err) {
        toast(err.message);
      }
      
    }

  if(selectId) FetchData();

  },[selectId]);

  if(!character) return <div style={{display:"flex",justifyItems:"center",width:"40%"}}><h4>Please Select a <SiMonster/>onster !</h4></div>


  return (
    <div style={{flex:1}}>
      <div className="character-detail">
        <img src={character.image} alt={character.name} className="character-detail__img" />
        <div className="character-detail__info">
          <span>{character.gender === "Male" ? <GiLizardman/> : <GiWomanElfFace/> }</span>
          <h3 className="name">{character.name}</h3>
          <div className="info">
          <span className={`status ${character.status === "Dead" ? "red" : ""}`}></span>
          <span> {character.status}</span>
          <span>-{character.species}</span>
          </div>
          <div className="location">
            <p>Last Known location !</p>
            <p>{character.location.name}</p>
          </div>
          <div className="action">
            <button className="btn btn--primary">Add to Favorite</button>
          </div>
        </div>
      </div>
      <div className="character-episodes">
    <div className="title">
    <h2>List Of Episodes</h2>
    <FaRegArrowAltCircleUp className="icon"/>
    </div>
<ul>
  {episodes.map((item,index)=>(
    <li key={item.id}>
      <div>{index + 1}-{item.episode} : <strong>{item.name}</strong></div>
      <div className="badge badge--secondary">{item.air_date}</div>
    </li>
  ))}
</ul>
      </div>
    </div>
  )
}
export default CharacterDetail;