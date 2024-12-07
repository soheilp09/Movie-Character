
import { BsHeart } from "react-icons/bs"
import { SiMonster } from "react-icons/si"



function Header({ResultLength,setName,name,setSort,sort}) {
    console.log(sort);
    
    return (
      <div className='navbar' >
          <div>
          <h3 className="logo">Rick And Morty <SiMonster  className="monsterIcon"/></h3>
          </div>
          
          <select className={`${sort === "Dead" ? "Dead" : sort === "Alive" ? "Alive" : "" }`} value={sort} onChange={(e)=>setSort(e.target.value)} >
            <option value="All">ALL</option>
            <option className="Dead" value="Dead">Dead</option>
            <option className="Alive" value="Alive">Alive</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
          </select>
          <div>
              <input value={name} onChange={(e)=>setName(e.target.value)} className="text-field" type="search" placeholder="Find Your Monster ..." />
          </div>
          <div>
              <span>Found {ResultLength} Results</span>
          </div>
          <button className="heart">
              <BsHeart className="heartIcon"/>
              <span className="badge">1</span>
          </button>
      
      </div>
    )
  }
  
  export default Header