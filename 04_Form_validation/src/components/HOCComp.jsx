 import Loader from "./Loader";
const HOCComp = (Component) => {

    return({isLoading, ...props}) => {
            if(isLoading){
                return(
                    <Loader/>
                )
            }
            else {
                return (
                    <Component {...props}/>
                )
            }
    }
}

export default HOCComp;