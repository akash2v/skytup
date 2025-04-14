import React, { useState, useRef, useEffect } from 'react';
import './Auth.css';

const OTPVerification = ({ length = 6, onComplete, onCancel, title = "Verify Your Email", subtitle = "Enter the verification code sent to your email" }) => {
  const [otp, setOtp] = useState(Array(length).fill(''));
  const [error, setError] = useState('');
  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const inputRefs = useRef([]);

  useEffect(() => {
    // Initialize refs
    inputRefs.current = inputRefs.current.slice(0, length);
    
    // Start countdown timer
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 1) {
          clearInterval(interval);
          setCanResend(true);
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [length]);

  const handleChange = (index, value) => {
    if (value.length > 1) return; // Prevent multiple digits
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    
    // Auto-focus next input
    if (value && index < length - 1) {
      inputRefs.current[index + 1].focus();
    }
    
    // Check if OTP is complete
    if (newOtp.every(digit => digit !== '')) {
      onComplete(newOtp.join(''));
    }
  };

  const handleKeyDown = (index, e) => {
    // Handle backspace
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, length);
    if (/^\d+$/.test(pastedData)) {
      const newOtp = [...otp];
      for (let i = 0; i < pastedData.length; i++) {
        newOtp[i] = pastedData[i];
      }
      setOtp(newOtp);
      
      // Focus the last input or the next empty input
      const lastIndex = Math.min(pastedData.length, length - 1);
      inputRefs.current[lastIndex].focus();
      
      // Check if OTP is complete
      if (newOtp.every(digit => digit !== '')) {
        onComplete(newOtp.join(''));
      }
    }
  };

  const handleResend = () => {
    // Reset timer and disable resend button
    setTimer(60);
    setCanResend(false);
    
    // TODO: Implement resend logic
    console.log('Resending OTP...');
  };

  return (
    <div className="otp-container">
      <div className="otp-header">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      
      {error && <div className="auth-error">{error}</div>}
      
      <div className="otp-input-container">
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={el => inputRefs.current[index] = el}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength="1"
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onPaste={handlePaste}
            className="otp-input"
            autoFocus={index === 0}
          />
        ))}
      </div>
      
      <div className="otp-timer">
        {timer > 0 ? (
          <p>Resend code in <span>{timer}s</span></p>
        ) : (
          <button 
            className="resend-button" 
            onClick={handleResend}
            disabled={!canResend}
          >
            Resend Code
          </button>
        )}
      </div>
      
      <div className="otp-actions">
        <button className="cancel-button" onClick={onCancel}>
          Cancel
        </button>
        <button 
          className="verify-button" 
          onClick={() => onComplete(otp.join(''))}
          disabled={otp.some(digit => digit === '')}
        >
          Verify
        </button>
      </div>
    </div>
  );
};

export default OTPVerification; 