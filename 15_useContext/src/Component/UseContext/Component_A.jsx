import { createContext } from "react";
import Comp_B from "./Component_B";

export const UserContext  = createContext()

const Comp_A = () => {


    let user  = {
        name : "Yogesh",
        email : "Yogesh123@gmail.com",
        age : 22, 
        address : "AT-Mahuva, D-Bhavanager"
    }

    return (
        <>
        <UserContext.Provider value={user} >
        <h1>Component A </h1>
        <Comp_B  user={user}/>
        </UserContext.Provider>
        
        </>
    )
}
export default Comp_A;