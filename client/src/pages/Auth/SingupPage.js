import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory
import { signupUser } from "../../services/authService";
import FormField from "../../components/FormField";
import './SignupPage.css';


const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("male");
  const [month, setMonth] = useState("");
  const [date, setDate] = useState("");
  const [year, setYear] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Replace useHistory with useNavigate

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const newUser = { name, email, password, gender, month, date, year };
      await signupUser(newUser);
      navigate("/login"); // Use navigate instead of history.push
    } catch (err) {
      setError("Error creating account. Please try again.");
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSignup}>
        <FormField
          label="Name"
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <FormField
          label="Email"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormField
          label="Password"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <FormField
          label="Month"
          type="text"
          id="month"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
        />
        <FormField
          label="Date"
          type="text"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <FormField
          label="Year"
          type="text"
          id="year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />

        <div className="form-field">
          <label htmlFor="gender">Gender</label>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="non-binary">Non-binary</option>
          </select>
        </div>

        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <a href="/login">Login</a>
      </p>
    </div>
  );
};

export default SignupPage;
