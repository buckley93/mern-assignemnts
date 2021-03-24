import React, { useState } from 'react';


const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName , email, password};
        console.log("Welcome", newUser);

    }

    // this is one way to do it. be careful of asyncronus functions such as e.target.value and firstname.
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        console.log(e.target.value);
        console.log(firstName);
        if (e.target.value.length > 0 && e.target.value.length < 2){
            setFirstNameError("First name must be at least 2 characters");
        }
        else{
            setFirstNameError("");
        }
    }

    
    
    return(
        <div>
        <form onSubmit={ createUser }>
            <div>
                <label>First Name </label>
                <input type="text" onChange = { handleFirstName } />
                {
                    firstNameError ?
                        <p style={{color: 'red'}}>{ firstNameError }</p>
                    : null
                }
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" onChange = { (e) => setLastName(e.target.value)} />
            </div>
            {
                lastName.length > 0 && lastName.length < 2 ?
                    <p>Last Name must be at least 2 characters</p>
                : null
            }
            <div>
                <label>Email: </label>
                <input type="text" onChange={ (e) => setEmail(e.target.value)} />
            </div>
            {
                email.length > 0 && email.length < 5 ?
                    <p>Email must be at least 5 characters</p>
                : null
            }
            <div>
                <label>password</label>
                <input type="text" onChange={ (e) => setPassword(e.target.value)} />
            </div>
            {
                password.length > 0 && password.length < 6 ?
                    <p>Password must be at least 8 characters</p>
                : null
            }
            <div>
                <label>Confirm Password</label>
                <input type="text" onChange = { (e) => setConfirmPassword(e.target.value)} />
            </div>
            {
                password !== confirmPassword?
                    <p>passwords must match</p>
                : null
            }
            <input type="submit" value="Create User" />
        </form>
        </div>
    );
}
    
export default Form;