
import { GiLizardman } from "react-icons/gi";
import { GiWomanElfFace } from "react-icons/gi";
import { FaEye } from "react-icons/fa";
import Loading from "../UI/Loading";

function CharacterList({characters,isLoading}) {

  if(isLoading) return <div className="characters-list"><Loading/></div>;

  return (
    <div className='characters-list'>
      {characters.map((item)=>(
        <Character key={item.id} item={item}/>
      ))}

    </div>
  )
};


function Character({item}) {
return  <div className='list__item'>
  <img src={item.image} alt={item.name} />
  <h3 className='name'>
    <span>{item.gender === "Male" ? <GiLizardman/> : <GiWomanElfFace/>}</span>
    <span>{item.name}</span>
  </h3>
  <div className='list-item__info info'>
    <span className={`status ${item.status === "Dead" ? "red" : ""}`}></span>
    <span> {item.status}-</span>
    <span>{item.species}</span>
  </div>
  <button className='icon red'><FaEye className='eyeIcon'/></button>
</div>
  
}

export default CharacterList