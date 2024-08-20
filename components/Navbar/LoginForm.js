import React from 'react';
import './LoginForm.css';

function LoginForm({ onClose }) {
  return (
    <div className="login-form">
      <span className="close-btn" onClick={onClose}>×</span> {/* Close button */}
      <h2>Login / Signup</h2>
      <form>
        {/* Form fields */}
        <div className="form-group">
          <input type="text" id="username" placeholder="Username" required />
        </div>
        <div className="form-group">
          <input type="text" id="Email" placeholder="Email" required />
        </div>
        <div className="form-group">
          <input type="text" id="Password" placeholder="Password" required />
        </div>
        <div className="form-group">
          <input type="text" id="Confirm password" placeholder="Confirm password" required />
        </div>
        <button type="submit" className="login-btn">Signup</button>
      </form>
      <div className="alternative-login">
        <p>Or log in with:</p>
        <button className="btn">Google</button>
        <button className="btn">Facebook</button>
        <button className="btn">Twitter</button>
      </div>
      <div className="create-account">
        <p>Don't have an account? <a href="/signup">Create one</a></p>
      </div>
    </div>
  );
}

export default LoginForm;
