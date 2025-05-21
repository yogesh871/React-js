import React, { useContext } from 'react'
import Comp_C from "./Component_C";
import { UserContext } from './Component_A';

const Comp_B = () => {
    let user  = useContext(UserContext)

    return (
         <>

         <h1>Component B</h1>
         <h3>{user.email}</h3>
         <Comp_C  user={user}/>
         
         </>
    )

}
export default Comp_B ; 