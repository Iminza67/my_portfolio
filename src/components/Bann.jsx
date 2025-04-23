import React, { useState, useEffect } from "react";
import "./Bann.css";

const Bann = ({
  headline = "Olivia's Portfolio",
  buttonLabel = "Visit My Github",
}) => {
  const [isVisible, setVisible] = useState(true);
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setMounted(false);
    setTimeout(() => setVisible(false), 500);
  };

  const handleButtonClick = () => {
    window.open("https://github.com/Iminza67", "_blank");
  };

  if (!isVisible) return null;

  return (
    <section className={`bann ${isMounted ? "fade-in" : "fade-out"}`}>
      <div className="bann-container">
        <h2 className="bann-heading">{headline}</h2>

        <div className="card">
          <div className="loader">
            <div className="words">
              <span className="word">Olivia's Bio</span>
              <span className="word">Olivia's Experience</span>
              <span className="word">Olivia's Tech Stack</span>
              <span className="word">Olivia's Skills</span>
            </div>
          </div>
        </div>

        <button
          className="bann-button bann-button-item animated-linkedin-button"
          onClick={handleButtonClick}
          aria-label={buttonLabel}
        >
          <span className="bann-button-bg">
            <span className="bann-button-bg-layers">
              <span className="bann-button-bg-layer bann-button-bg-layer-1 -pink" />
              <span className="bann-button-bg-layer bann-button-bg-layer-2 -blue" />
              <span className="bann-button-bg-layer bann-button-bg-layer-3 -gold" />
            </span>
          </span>
          <span className="bann-button-inner">
            <span className="bann-button-inner-static">{buttonLabel}</span>
            <span className="bann-button-inner-hover">See My Work</span>
          </span>
        </button>

        <div className="bann-controls">
          <button
            className="bann-close"
            onClick={handleClose}
            aria-label="Close banner"
          >
            ✕
          </button>
        </div>
      </div>
    </section>
  );
};

export default Bann;
