import Navbar from "@/app/components/navbar";
import React, { useState } from 'react';

const SignUp = () => {
  const [formData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    path: '',
    password: '',
    confirmPassword: ''
  });

  return (
    <div>
      <Navbar />
      <div className="container">
        <form>
            <input 
              type="text" 
              placeholder="First Name" 
              name="firstName" 
              value={formData.firstName}
            />
            <input 
              type="text" 
              placeholder="Last Name" 
              name="lastName" 
              value={formData.lastName}
            />
            <input 
              type="email" 
              placeholder="Email" 
              name="email" 
              value={formData.email}
            />
            <input 
              type="path"
              placeholder="Path"
              name="path"
              value={formData.path}
            />
            <input 
              type="password" 
              placeholder="Password" 
              name="password" 
              value={formData.password}
            />
            <input 
              type="password" 
              placeholder="Confirm Password" 
              name="confirmPassword" 
              value={formData.confirmPassword}
            />
            <button type="submit">Signup</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;