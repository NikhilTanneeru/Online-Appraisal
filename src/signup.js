import React from 'react';
import './css/signupcss.css'
function SignupPage() {
    const redirectToPasswordPage = () => {
        window.location.href = "passwordpage.html";
    };

    return (
        <div className="container">
            <center><h2>Signup Page</h2></center>
            <form id="signupForm" action="passwordpage.html" method="post">

                <label htmlFor="title">Title:</label>
                <select id="title" name="title">
                    <option value="Dr">Dr</option>
                    <option value="Miss">Miss</option>
                    <option value="Mr">Mr</option>
                </select>

                <label htmlFor="firstName">First Name:</label>
                <input type="text" id="firstName" name="firstName" required />

                <label htmlFor="lastName">Last Name:</label>
                <input type="text" id="lastName" name="lastName" required />

                <label htmlFor="school">School:</label>
                <select id="school" name="school">
                    <option value="SCOPE">SCOPE</option>
                    <option value="SENSE">SENSE</option>
                </select>

                <label htmlFor="employeeId">Employee ID (5 digits):</label>
                <input type="text" id="employeeId" name="employeeId" pattern="\d{5}" title="Please enter 5 digits" required />

                <label htmlFor="designation">Designation:</label>
                <select id="designation" name="designation">
                    <option value="Designation 1">Designation 1</option>
                    <option value="Designation 2">Designation 2</option>
                </select>

                <label htmlFor="employeeType">Employee Type:</label>
                <input type="text" id="employeeType" name="employeeType" required />

                <label htmlFor="joiningDate">Date of Joining:</label>
                <input type="date" id="joiningDate" name="joiningDate" required />

                <label htmlFor="dob">Date of Birth:</label>
                <input type="date" id="dob" name="dob" required />

                <label htmlFor="email">Email (VITAP mail):</label>
                <input type="email" id="email" name="email" pattern=".+@vitap\.ac\.in" title="Please use VITAP email" required />

                <label htmlFor="officeNumber">Office Number:</label>
                <input type="tel" id="officeNumber" name="officeNumber" pattern="[0-9]{10}" title="Please enter a valid 10-digit number" />

                <label htmlFor="personalNumber">Personal Number:</label>
                <input type="tel" id="personalNumber" name="personalNumber" pattern="[0-9]{10}" title="Please enter a valid 10-digit number" />

                <button type="submit" onClick={redirectToPasswordPage}>Submit</button>
            </form>
        </div>
    );
}

export default SignupPage;
