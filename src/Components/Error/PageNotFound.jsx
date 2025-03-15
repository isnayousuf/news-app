import React from 'react';
import { useNavigate } from "react-router-dom";
import Image from "../../assets/page-not-found.webp";

const PageNotFound = () => {
   const navigate = useNavigate();
  return (
    <div className="container text-center mt-5">
      <img
        src={Image}
        className="card-img-top rounded"
        alt={
            "Page is not available"
        }
        style={{ height: "420px", width: "400px", objectFit: "cover" }}
      />
      <h2 className="mt-4">🚀 Oops! Looks Like You're Lost in Space</h2>
      <p>
        The page you're looking for has drifted into the unknown. Let's navigate
        you back to safety!
      </p>

      <button className="btn btn-dark" onClick={() => navigate("/")}>
        Go Back to Home
      </button>
    </div>
  );
}

export default PageNotFound
