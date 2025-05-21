import React, { useContext } from 'react'
import Comp_D from "./Component_D";
import { UserContext } from './Component_A';

const Comp_C = () => {
    let user  = useContext(UserContext)

    return (
         <>

         <h1>Component C</h1>
       
         <h4>{user.age}</h4>

         <Comp_D user={user}/>
         
         </>
    )

}
export default Comp_C ;