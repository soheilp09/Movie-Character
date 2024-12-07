import {  HashLoader } from "react-spinners"


function Loading() {
  return (
 
    <div style={{display:"flex",justifyContent:"center",margin:10}}>
    <HashLoader
  color="#e11d48"
  height={60}
  width={10}
/>
    </div>


  )
}

export default Loading
