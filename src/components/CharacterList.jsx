
import { GiLizardman } from "react-icons/gi";
import { GiWomanElfFace } from "react-icons/gi";
import { FaEye } from "react-icons/fa";
import Loading from "../UI/Loading";

function CharacterList({characters,isLoading,onSelectId}) {

  if(isLoading) return <div className="characters-list"><Loading/></div>;

  return (
    <div className='characters-list'>
      {characters.map((item)=>(
        <Character key={item.id} item={item} onSelectId={onSelectId}>
            <button className='icon red' onClick={()=>onSelectId(item.id)}><FaEye className='eyeIcon'/></button>
        </Character>
      ))}

    </div>
  )
};


export function Character({item,children}) {
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
{children}
</div>
  
}

export default CharacterList