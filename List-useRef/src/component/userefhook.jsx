 import {useRef} from "react";

 
 
 const Useref = () => {
     const inputref = useRef()
     
     const handleClick = () =>{
         console.log(inputref)
        }

        return (

            <>
     <h2>UseRef Hook</h2>

     <input type="text" ref={inputref}/>
     <button onClick={handleClick}>Submit</button>
 </>
            )
 }

 export default  Useref;