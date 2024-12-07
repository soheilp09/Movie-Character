import { CgClose } from "react-icons/cg";


function Modal({open,setOpen,title,children}) {
  return (
    <div>
    {open ?   <div>
    <div className="backdrop" onClick={()=>setOpen(false)}></div>
    <div className="modal">
        <div className="modal__header">
        <h3 className="title">{title}</h3>
            <button onClick={()=>setOpen(false)} className="close"><CgClose className="icon"/></button>
        </div>
        <div>
         {children}
        </div>
    </div>
    </div> : ""}
        </div>

  )
}

export default Modal;
