import { useState, useEffect } from "react";
// import './App.css'

import FormValidation from "./components/FormValidation"
import ControlComp from "./components/controlComp"
import RagistrationForm from './components/formRagisration'
import UnControlComp from './components/unControlComp'
import HOCComp from "./components/HOCComp";




const HOCFORM = HOCComp(RagistrationForm);
  
function App() {
  let [isLoading, setIsLoding] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoding(false);
    }, 3000);
  });

  return (
    <>
    {/* <ControlComp/>
    <UnControlComp/> */}
    {/* <RagistrationForm/> */}
    {/* <FormValidation/> */}
    <HOCFORM isLoading={isLoading} title="Form Validation" name=" !!!" />
    </>
  )
}

export default App
