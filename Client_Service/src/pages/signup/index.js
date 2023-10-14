import styles from "./signup.css";
import Navbar from "@/app/components/navbar";
import React, { useState } from 'react';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    path: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };


  return (
    <div>
      <Navbar />
      <div className="container">
        <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="First Name" 
          name="firstName" 
          value={formData.firstName}
          onChange={handleInputChange}
        />
        <input 
          type="text" 
          placeholder="Last Name" 
          name="lastName" 
          value={formData.lastName}
          onChange={handleInputChange}
        />
        <input 
          type="email" 
          placeholder="Email" 
          name="email" 
          value={formData.email}
          onChange={handleInputChange}
        />
        <input 
          type="password" 
          placeholder="Password" 
          name="password" 
          value={formData.password}
          onChange={handleInputChange}
        />
          <input 
            type="password" 
            placeholder="Confirm Password" 
            name="confirmPassword" 
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />

            <button type="submit">Signup</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;