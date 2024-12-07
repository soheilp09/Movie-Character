import { GiLizardman, GiWomanElfFace } from "react-icons/gi"
import { character, episodes } from "../../data/data"
import { FaRegArrowAltCircleUp } from "react-icons/fa";


function CharacterDetail({selectId}) {

  
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