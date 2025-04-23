import React, { useState, useEffect } from "react";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/untitled2.svg";
import Waves from "./Waves";

function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const toRotate = [
    "FullStack Web Developer",
    "Software Developer",
    "Data Scientist",
  ];
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/olivia-hamisi-7080632a2/", "_blank");
  };

  return (
    <section
      className="banner"
      id="home"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(45deg, #4e2a84, #2c1e5f)",
        color: "white",
        padding: "60px 0",
      }}
    >
      <Waves />
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={`${
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }`}
                  style={{
                    textAlign: "left",
                    animationDuration: "1s",
                    animationDelay: "0.5s",
                  }}
                >
                  <span className="tagline" style={{ fontSize: "18px" }}>
                    Welcome to my portfolio
                  </span>
                  <h1 style={{ fontSize: "3.5rem", fontWeight: "bold" }}>
                    {`I am Olivia Hamisi`}{" "}
                    <span
                      className="wrap"
                      style={{
                        color: "#ffeb3b",
                        fontWeight: "lighter",
                        fontStyle: "italic",
                      }}
                    >
                      {text}
                    </span>
                  </h1>
                  <p
                    style={{
                      fontSize: "1.2rem",
                      lineHeight: "1.6",
                      fontWeight: "300",
                      maxWidth: "500px",
                    }}
                  >
                    Hello, I'm Olivia, a passionate software engineer and Informatics
                    student at IMC University of Applied
                    Sciences Krems. I’m deeply committed to solving real-world
                    problems through technology and building impactful,
                    user-centric solutions. From working on full-stack web
                    applications to designing intuitive UIs, I thrive in both
                    technical and creative aspects of development. I’m always
                    eager to learn and grow, and I'm currently focused on
                    building projects in areas like AI, data science, and web
                    development. Let's connect and explore how we can
                    collaborate to make a difference through innovation!
                  </p>
                  <button
                    onClick={openLinkedIn}
                    style={{
                      padding: "12px 24px",
                      backgroundColor: "#f5a623",
                      border: "none",
                      borderRadius: "30px",
                      color: "#fff",
                      fontSize: "1.1rem",
                      cursor: "pointer",
                      display: "inline-flex",
                      alignItems: "center",
                      transition: "all 0.3s ease",
                    }}
                  >
                    Let's connect
                    <i
                      className="fa-solid fa-circle-arrow-right"
                      style={{
                        color: "#fff",
                        paddingLeft: "10px",
                        fontSize: "25px",
                      }}
                    ></i>
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img
              src={headerImg}
              alt="Header"
              style={{
                width: "100%",
                maxWidth: "500px",
                borderRadius: "10px",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
              }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;
