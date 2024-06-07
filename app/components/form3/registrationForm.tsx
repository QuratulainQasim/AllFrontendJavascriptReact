// import React, { useState, useEffect } from 'react';

// import './style.css';

// const RegistrationForm = () => {

//     useEffect(() => {
//         const storedData = localStorage.getItem('allUserRegistrations');
//         if (storedData) {
//             setAllUserRegistrations(JSON.parse(storedData));
//         }
//     }, []);  

   
//     const [userRegistration, setUserRegistration] = useState({
//         username: "",
//         email: "",
//         phone: "",
//         password: ""
//     });

//     const [allUserRegistrations, setAllUserRegistrations] = useState([]);

//     const [displayedValues, setDisplayedValues] = useState("");

   
//     const handleInputs = (e: { target: { name: any; value: any; }; }) => {
//         const name = e.target.name;
//         const value = e.target.value;
//         setUserRegistration({ ...userRegistration, [name]: value });
//     }

   
//     const Buttonclick = () => {
//         const currentUserRegistration = { ...userRegistration };

       
//         const displayText = `Fullname: ${currentUserRegistration.username}, Email: ${currentUserRegistration.email}, Phone: ${currentUserRegistration.phone}, Password: ${currentUserRegistration.password}`;

//         localStorage.setItem('allUserRegistrations', JSON.stringify([...allUserRegistrations, currentUserRegistration]));

       
//         setAllUserRegistrations([...allUserRegistrations, currentUserRegistration]);
//         setDisplayedValues(displayText);
//     }

//     return (
//         <>
//             <h2 className='first-heading'> Registration form </h2>
//             <form action="">
//                 <div className='form-box'>
//                     <label htmlFor="username" className='my-Label'>Fullname</label><br />
//                     <input type="text" name='username' id='username'
//                         value={userRegistration.username}
//                         onChange={handleInputs} /><br /><br />

//                     <label htmlFor="email" className='my-Label'>Email</label><br />
//                     <input type="text" name='email' id='email'
//                         value={userRegistration.email}
//                         onChange={handleInputs} /><br /><br />

//                     <label htmlFor="phone" className='my-Label'>Phone</label><br />
//                     <input type="text" name='phone' id='phone'
//                         value={userRegistration.phone}
//                         onChange={handleInputs} /><br /><br />

//                     <label htmlFor="password" className='my-Label'>Password</label><br />
//                     <input type="password" name='password' id='password'
//                         value={userRegistration.password}
//                         onChange={handleInputs} /><br /><br />

//                     <button onClick={Buttonclick}>Registered</button>
//                 </div>
//             </form>
//             <div>
//                 <h3>Displayed Values:</h3>
               
//                 {allUserRegistrations.map((user, index) => (
//                     <p key={index}>
//                         Fullname: {user.username}, Email: {user.email}, Phone: {user.phone}, Password: {user.password}
//                     </p>
//                 ))}
//             </div>
//         </>
//     );
// }

// export default RegistrationForm;
