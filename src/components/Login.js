import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import "./Login.css"; // Import the CSS file for additional styles

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en"); // Default to English
  const [rememberMe, setRememberMe] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  const toggleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here (e.g., validation, API call)
    console.log("Form submitted:", {
      email,
      password,
      selectedLanguage,
      rememberMe,
    });
  };

  return (
    <div className="login-container">
      <div className="form-box">
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <label className="form-label">Email:</label>
            <FontAwesomeIcon icon={faEnvelope} className="form-icon" />
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={handleEmailChange}
              className="form-input"
              pattern="[a-zA-Z0-9._%+-]+@noventiq\.com" // Custom pattern for Noventiq domain
              required
            />
          </div>

          <div className="form-row">
            <label className="form-label">Password:</label>
            <FontAwesomeIcon icon={faLock} className="form-icon" />
            <div className="password-field">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                className="form-input full-width"
                required
              />
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                className="password-toggle-icon"
                onClick={togglePasswordVisibility}
              />
            </div>
          </div>
          <div>
            <a href="/forgot-password" className="forgot-password-link">
              Forgot Password?
            </a>
          </div>

          <div className="form-row">
            <label className="form-label">Language:</label>
            <select
              value={selectedLanguage}
              onChange={handleLanguageChange}
              className="form-input"
            >
              <option value="en">English</option>
              <option value="hi">Hindi</option>
              <option value="other">Other Indian Language</option>
            </select>
          </div>

          <div className="form-row justify-center">
            <label className="switch">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={toggleRememberMe}
                className="form-input-toggle"
              />
              <span className="slider round"></span>
            </label>
            <span className="toggle-label">Remember Me</span>
          </div>

          <button className="submit-button" onClick={handleSubmit}>
            Log in
          </button>
        </form>
      </div>

      <div className="copyright-container">
        <p>Copyright 2024 Noventiq | Powered by Noventiq</p>
      </div>
    </div>
  );
};

export default Login;
