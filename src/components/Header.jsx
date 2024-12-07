import { BsHeart } from "react-icons/bs"
import { SiMonster } from "react-icons/si"



function Header({ResultLength}) {
    return (
      <div className='navbar' >
          <div>
          <h3 className="logo">Rick And Morty <SiMonster  className="monsterIcon"/></h3>
          </div>
          <div>
              <input className="text-field" type="search" placeholder="Find Your Monster ..." />
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