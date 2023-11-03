// Registration.test.js

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

test('it allows users to register for an account', () => {
  let registeredEmail = '';

  // Create a mock registration function that stores the registered email
  const onRegister = (email) => {
    registeredEmail = email;
  };

  render(<RegistrationForm onRegister={onRegister} />);

  const emailInput = screen.getByPlaceholderText('Email');
  const passwordInput = screen.getByPlaceholderText('Password');
  const registerButton = screen.getByText('Register');

  // Simulate user input and registration button click
  fireEvent.change(emailInput, { target: { value: 'testuser@example.com' } });
  fireEvent.change(passwordInput, { target: { value: 'password123' } });
  fireEvent.click(registerButton);

  // Check that the registration function was called with the correct email
  expect(registeredEmail).toBe('testuser@example.com');
  expect(registeredEmail).toBe('velocified@gmail.com');
});
