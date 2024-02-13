import React from 'react';
import './signupstyle.css'; // Import CSS file

function PasswordPage() {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    // Add your form submission logic here
  };

  return (
    <div className="container">
      <center><h2>Create your Password</h2></center>
      <form id="signupForm" onSubmit={handleSubmit}>
        <label htmlFor="firstName">Enter New Password:</label>
        <input type="password" id="firstName" name="firstName" required />

        <label htmlFor="lastName">Confirm Password:</label>
        <input type="password" id="lastName" name="lastName" required />
        <br /><br />
        <center><button type="submit">Submit</button></center>
      </form>
    </div>
  );
}

export default PasswordPage;
