import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

const ForgotPassword = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setErrors({ email: 'Email is required' });
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setErrors({ email: 'Email is invalid' });
      return;
    }
    try {
      // TODO: Implement your email verification logic here
      console.log('Email submitted:', email);
      setStep(2);
    } catch (error) {
      setErrors({ submit: error.message });
    }
  };

  const handleOtpChange = (index, value) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      const nextInput = document.querySelector(`input[name=otp-${index + 1}]`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    const otpValue = otp.join('');
    if (otpValue.length !== 6) {
      setErrors({ otp: 'Please enter complete OTP' });
      return;
    }
    try {
      // TODO: Implement OTP verification logic here
      console.log('OTP submitted:', otpValue);
      setStep(3);
    } catch (error) {
      setErrors({ otp: error.message });
    }
  };

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    if (!newPassword) {
      setErrors({ newPassword: 'Password is required' });
      return;
    }
    if (newPassword.length < 8) {
      setErrors({ newPassword: 'Password should be at least 8 characters' });
      return;
    }
    if (newPassword !== confirmPassword) {
      setErrors({ confirmPassword: 'Passwords do not match' });
      return;
    }
    try {
      // TODO: Implement password reset logic here
      console.log('Password reset submitted:', { email, newPassword });
      // Redirect to login page after successful password reset
    } catch (error) {
      setErrors({ submit: error.message });
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form-container">
        <h2>Reset Password</h2>
        
        {step === 1 && (
          <form onSubmit={handleEmailSubmit} className="auth-form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            {errors.submit && <div className="error-message submit-error">{errors.submit}</div>}

            <button type="submit" className="submit-button">
              Send Reset Link
            </button>

            <div className="auth-links">
              <Link to="/login">Back to Login</Link>
            </div>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleOtpSubmit} className="auth-form">
            <div className="form-group">
              <label>Enter OTP</label>
              <div className="otp-inputs">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    name={`otp-${index}`}
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    maxLength="1"
                    pattern="[0-9]"
                    inputMode="numeric"
                  />
                ))}
              </div>
              {errors.otp && <span className="error-message">{errors.otp}</span>}
            </div>

            <button type="submit" className="submit-button">
              Verify OTP
            </button>

            <div className="auth-links">
              <button type="button" className="resend-otp">
                Resend OTP
              </button>
            </div>
          </form>
        )}

        {step === 3 && (
          <form onSubmit={handlePasswordReset} className="auth-form">
            <div className="form-group">
              <label htmlFor="newPassword">New Password</label>
              <div className="password-input">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="newPassword"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter new password"
                  className={errors.newPassword ? 'error' : ''}
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                </button>
              </div>
              {errors.newPassword && <span className="error-message">{errors.newPassword}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm New Password</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm new password"
                className={errors.confirmPassword ? 'error' : ''}
              />
              {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
            </div>

            {errors.submit && <div className="error-message submit-error">{errors.submit}</div>}

            <button type="submit" className="submit-button">
              Reset Password
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword; 