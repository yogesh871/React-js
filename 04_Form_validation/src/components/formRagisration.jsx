// import { useState } from "react";
// import "./form.css";

// const RagistrationForm = () => {
//     const [user, setUser] = useState({
//         firstname: "", 
//         lastname: "", 
//         email: "", 
//         password: "", 
//         phoneNumber: ""
//     });

//     const handleInput = (e) => {
//         const {name, value} = e.target;
//         setUser((prev) => ({...prev, [name]: value}));
//     };

//     const handleForm = (event) => {
//         event.preventDefault();
//         console.log(user);
//     };

//     return (
//         <div className="form-container">
//             <div className="ragi-form">
//                 <h2 className="form-title">Registration Form</h2>
//                 <form onSubmit={handleForm} className="animated-form">
//                     <div className="input-detail">
//                         <input 
//                             type="text" 
//                             name="firstname" 
//                             value={user.firstname} 
//                             onChange={handleInput} 
//                             required
//                         />
//                         <label>First Name</label>
//                         <span className="focus-border"></span>
//                     </div>
//                     <div className="input-detail">
//                         <input 
//                             type="text" 
//                             name="lastname" 
//                             value={user.lastname} 
//                             onChange={handleInput} 
//                             required
//                         />
//                         <label>Last Name</label>
//                         <span className="focus-border"></span>
//                     </div>
//                     <div className="input-detail">
//                         <input 
//                             type="email" 
//                             name="email" 
//                             value={user.email} 
//                             onChange={handleInput} 
//                             required
//                         />
//                         <label>Email</label>
//                         <span className="focus-border"></span>
//                     </div>
//                     <div className="input-detail">
//                         <input 
//                             type="password" 
//                             name="password" 
//                             value={user.password} 
//                             onChange={handleInput} 
//                             required
//                         />
//                         <label>Password</label>
//                         <span className="focus-border"></span>
//                     </div>
//                     <div className="input-detail">
//                         <input 
//                             type="tel" 
//                             name="phoneNumber" 
//                             value={user.phoneNumber} 
//                             onChange={handleInput} 
//                             required
//                         />
//                         <label>Phone Number</label>
//                         <span className="focus-border"></span>
//                     </div>
//                     <button className="submit-btn">Submit</button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default RagistrationForm;


import { useState } from "react";
import "./form.css";

const RagistrationForm = () => {
    const [user, setUser] = useState({
        firstname: "", 
        lastname: "", 
        email: "", 
        password: "", 
        phoneNumber: ""
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInput = (e) => {
        const {name, value} = e.target;
        setUser((prev) => ({...prev, [name]: value}));
    };

    const handleForm = (event) => {
        event.preventDefault();
        console.log(user);
        
        setIsSubmitted(true);
        
        setTimeout(() => {
            setUser({
                firstname: "", 
                lastname: "", 
                email: "", 
                password: "", 
                phoneNumber: ""
            });
            setIsSubmitted(false);
        }, 1500);
    };

    return (
        <div className="form-container">
            <div className={`ragi-form ${isSubmitted ? 'form-submitted' : ''}`}>
                <h2 className="form-title">
                    <span className="title-text">Registration</span>
                    <span className="title-underline"></span>
                </h2>
                
                <form onSubmit={handleForm} className="animated-form">
                    <div className="input-detail">
                        <input 
                            type="text" 
                            name="firstname" 
                            value={user.firstname} 
                            onChange={handleInput} 
                            required
                        />
                        <label>
                            <span className="label-char">FirstName</span>
                            {/* <span className="label-rest">irst Name</span> */}
                        </label>
                        <span className="focus-border"></span>
                    </div>
                    
                    <div className="input-detail">
                        <input 
                            type="text" 
                            name="lastname" 
                            value={user.lastname} 
                            onChange={handleInput} 
                            required
                        />
                        <label>
                            <span className="label-char">LastName</span>
                            {/* <span className="label-rest">ast Name</span> */}
                        </label>
                        <span className="focus-border"></span>
                    </div>
                    
                    <div className="input-detail">
                        <input 
                            type="email" 
                            name="email" 
                            value={user.email} 
                            onChange={handleInput} 
                            required
                        />
                        <label>
                            <span className="label-char">Email</span>
                            {/* <span className="label-rest">mail</span> */}
                        </label>
                        <span className="focus-border"></span>
                    </div>
                    
                    <div className="input-detail">
                        <input 
                            type="password" 
                            name="password" 
                            value={user.password} 
                            onChange={handleInput} 
                            required
                        />
                        <label>
                            <span className="label-char">Password</span>
                            {/* <span className="label-rest">assword</span> */}
                        </label>
                        <span className="focus-border"></span>
                    </div>
                    
                    <div className="input-detail">
                        <input 
                            type="tel" 
                            name="phoneNumber" 
                            value={user.phoneNumber} 
                            onChange={handleInput} 
                            required
                        />
                        <label>
                            <span className="label-char">Contact</span>
                            {/* <span className="label-rest">hone Number</span> */}
                        </label>
                        <span className="focus-border"></span>
                    </div>
                    
                    <button className="submit-btn">
                        <span className="btn-text">Submit</span>
                        <span className="btn-icon">→</span>
                    </button>
                </form>
                
                {isSubmitted && (
                    <div className="success-message">
                        <svg className="checkmark" viewBox="0 0 52 52">
                            <circle className="checkmark-circle" cx="26" cy="26" r="25" fill="none"/>
                            <path className="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                        </svg>
                        <p>Registration Successful!</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default RagistrationForm;