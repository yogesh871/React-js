import { useRef } from "react";

const UnControlComp = () => {
      const fnameref = useRef("");
      const emailref = useRef("");


      const handleSubmt = (e) => {
        e.preventDefault();

        console.log("Name :", fnameref.current.value )
        console.log("Email :", emailref.current.value )

        fnameref.current.value = " "
        emailref.current.value  = " "
      }

      return (
         <>
          <form onSubmit={handleSubmt}> 
            <h2>UnControl Component</h2>
             <label>Name:</label>
             <input type="text" ref={fnameref } /> 
             <br/>
             <br/>
             <label>Name:</label>
             <input type="text"  ref={emailref } /> 
             <br/>
             <br/>
             <button  onClick={handleSubmt}>Submit</button>
        </form>
         </>

      )
}

export default  UnControlComp ;