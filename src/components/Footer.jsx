import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github-brands-solid.svg";
import navIcon3 from "../assets/img/instagram-brands-solid.svg";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center text-center">
          
          <Col>
            <div className="social-icon">
              <a
                target="blank"
                href="https://www.linkedin.com/in/olivia-hamisi-7080632a2/"
              >
                <img src={navIcon1} alt="Icon" />
              </a>
              <a target="blank" href="https://github.com/Iminza67">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a target="blank" href="https://www.youtube.com/@Theeiminza">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p>Copyright &copy; {currentYear}. Olivia Hamisi's Portfolio</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
