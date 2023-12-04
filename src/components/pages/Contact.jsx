import React, { useState } from 'react';
import '../styles/Contact.css'; // Importing CSS for styling

// Contact component definition
export default function Contact() {
  // useState to manage form data and validation errors
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  // Handles change in input fields and updates form data
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error for the field if it exists
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  // Validates individual field when it loses focus
  const handleBlur = (e) => {
    validateField(e.target.name, formData[e.target.name]);
  };

  // Validates entire form data
  const validateForm = () => {
    let isValid = true;
    for (const name in formData) {
      // Validate each field and update the form's validity
      if (!validateField(name, formData[name])) {
        isValid = false;
      }
    }
    return isValid;
  };

  // Validates a specific field and updates error messages
  const validateField = (name, value) => {
    let isValid = true;
    let errorMessage = '';

    // Checks if the field is empty
    if (!value) {
      isValid = false;
      errorMessage = 'This field is required';
    } else if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
      // Validates email format
      isValid = false;
      errorMessage = 'Email is not valid';
    }

    // Updates the errors state
    setErrors({ ...errors, [name]: errorMessage });
    return isValid;
  };

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validates form before submission
    if (validateForm()) {
      console.log('Form Data Submitted: ', formData);
      // Reset form data after successful submission
      setFormData({ name: '', email: '', message: '' });
    }
  };

  // Renders the contact form
  return (
    <div className="contact-form">
      <h1>Contact Page</h1>
      <form onSubmit={handleSubmit}>
        {/* Name input field */}
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {/* Error message for name field */}
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        {/* Email input field */}
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {/* Error message for email field */}
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        {/* Message textarea field */}
        <div>
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {/* Error message for message field */}
          {errors.message && <p className="error">{errors.message}</p>}
        </div>
        {/* Submit button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
