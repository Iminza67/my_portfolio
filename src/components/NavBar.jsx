import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/img/logo-solid.svg";
import mail from "../assets/img/envelope-regular.svg";
import linkedin from "../assets/img/linkedin-brands-solid.svg";
import github from "../assets/img/github-brands-solid.svg";

function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Navbar expand="lg" className={scrolled ? "Scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home" className="navbar-brand">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <i className="fa-solid fa-bars" style={{ color: "#FFD43B" }}></i>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {["home", "skills", "projects"].map((section) => (
              <Nav.Link
                key={section}
                href={`#${section}`}
                className={activeLink === section ? "active navbar-link" : "navbar-link"}
                onClick={() => onUpdateActiveLink(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Nav.Link>
            ))}
          </Nav>

          <span className="navbar-text">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/olivia-hamisi-7080632a2/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} alt="LinkedIn Icon" />
              </a>
              <a
                href="https://github.com/Iminza67"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} alt="GitHub Icon" />
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToContact();
                }}
              >
                <img src={mail} alt="Email Icon" />
              </a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
