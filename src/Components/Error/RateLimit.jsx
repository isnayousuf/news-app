import React from 'react';
import { useNavigate } from "react-router-dom";

const RateLimit = () => {
   const navigate = useNavigate();
  return (
    <div className="container text-center mt-5" style={{height: "80vh"}}>
      <div className="d-flex flex-column justify-content-center align-items-center h-100">
        <h2>🚨 API Rate Limit Exceeded 🚨</h2>
        <p>I have reached the maximum API request limit for today.</p>
        <p>Please try again later if you want to see this project.</p>
        <button className="btn btn-primary" onClick={() => navigate("/")}>
          Go Back to Home
        </button>
      </div>
    </div>
  );
}

export default RateLimit
