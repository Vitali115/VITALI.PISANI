import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./space.scss";
export default function ScrollToTop() {
  return (
    <>
      <div className="animated">
        <div className="animation-wrapper">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
        </div>
      </div>
    </>
  );
}
