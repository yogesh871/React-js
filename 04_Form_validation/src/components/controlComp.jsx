import { useState } from "react";


const ControlComp = () => {
    
    const [fname, setfname] = useState("");
    const [email, setemail] = useState("");

    const handleName = (e) => {
        setfname(e.target.value);
    }

    const handleEmail = (e) => {
        setemail(e.target.value);
    }

    const handleSubmt = (e) => {
        e.preventDefault();
        console.log("Name : ", fname);
        console.log("Email : ", email);

        setfname("");
        setemail("");
    }

    return (
        <form>
            <h2>Control Component</h2>
             <label>Name:</label>
             <input type="text" value={fname} onChange={handleName} /> 
             <br/>
             <br/>
             <label>Name:</label>
             <input type="text" value={email} onChange={handleEmail} /> 
             <br/>
             <br/>
             <button  onClick={handleSubmt}>Submit</button>
        </form>
    );
}


  export default ControlComp;