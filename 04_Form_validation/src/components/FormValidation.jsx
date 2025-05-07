import { useState } from "react";
import "./FormValidation.css";


const FormValidation =  ({title, name}) => {
    const user = {
        fname : "",
        lname : "",
        email : "",
        password : "",
        contact : "",
        gender : "",
    }

    const [input, setInput] = useState(user)
    const [error, setError] = useState({})

    
    const handleInput = (e) =>  {
        const {name, value} = e.target
        setInput ({...input, 
        [name] : value
        })
     }
 
    
    const Validation = () =>  {
        let errorList = {};

        if(input.fname == "") {
           errorList.fnameError = "FirstName is Required";
        }
        if(input.lname == "") {
           errorList.lnameError = "LastName is Required";
        }
        if(input.email == "") {
           errorList.emailError = "Email is Required";
        }
        if(input.password == "") {
           errorList.passwordError = "Password is Required";
        } else if(input.password.length < 6) {
            errorList.passwordError = "Password minimum 6 charecter ";
        } 
        if(input.contact == ""){
            errorList.contactError = " Contact Number will Required"
        }else if(input.contact.length != 10){
            errorList.contactError = " Contact Number will Required 10 Digit"
        }
        if(input.gender == "") {
            errorList.genderError = "Gender is Required";
         }
         setError(errorList);
         if (Object.keys(errorList).length > 0) {
           return false;
         } else {
           return true;
         }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(Validation()){

            console.log(input)
            setInput(user)
        } 
   }


    return  (
        <div className="Form">
            <h2>{title}{name}</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-datail">
                    <label>FirstName</label>
                    <input type="text" name="fname" value={input.fname} onChange={handleInput} />
                    {error.fnameError ? <i>{error.fnameError}</i> : ""}
                </div>
                
                <div className="input-datail">
                    <label>LastName</label>
                    <input type="text" name="lname" value={input.lname} onChange={handleInput} />
                    {error.lnameError ? <i>{error.lnameError}</i> : ""}
                </div>

                <div className="input-datail">
                    <label>Email</label>
                    <input type="text" name="email" value={input.email} onChange={handleInput} />
                    {error.emailError ? <i>{error.emailError}</i> : ""}
                </div>

                <div className="input-datail">
                    <label>Password</label>
                    <input type="password" name="password" value={input.password} onChange={handleInput} />
                    {error.passwordError ? <i>{error.passwordError}</i> : ""}

                </div>
                <div className="input-datail">
                    <label>Contact</label>
                    <input type="tel"  name="contact" value={input.contact} onChange={handleInput} />
                    {error.contactError ? <i>{error.contactError}</i> : ""}

                </div>
                <div className="input-datail">
                    <label>gender</label>
                    <input type="radio" name="gender" value="Male"  onChange={handleInput} /> Male
                    <input type="radio" name="gender"  value="Female"  onChange={handleInput} /> Female
                    {error.genderError ? <i>{error.genderError}</i> : ""}

                </div>
                <button>Submit</button>

            </form>
        </div>
    )
} 

export default FormValidation;