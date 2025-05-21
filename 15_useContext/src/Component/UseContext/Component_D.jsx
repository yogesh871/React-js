import React, { useContext } from 'react'
import { UserContext } from './Component_A';



const Comp_D = () => {
    let user  = useContext(UserContext)
    return (
         <>
         <h1>Component D</h1>
         <h3>{user.name}</h3>
         <h3>{user.address}</h3>
         </>
    )

}
export default Comp_D ;