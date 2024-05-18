/*eslint-disable*/
import React from "react";

// reactstrap components
import { Row, Container, Col } from "reactstrap";

function DemoFooter() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row className="align-items-center">
          <Col xs="12" md="8" className="d-flex justify-content-center justify-content-md-start">
            <nav className="footer-nav">
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    FACEBOOK
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    TWITTER
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    INSTAGRAM
                  </a>
                </li>
              </ul>
            </nav>
          </Col>
          <Col xs="12" md="4" className="text-center text-md-right icp-logo">
            <a
              href="https://internetcomputer.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require("assets/img/internet-computer-icp-logo.png")} // Ensure the image path is correct
                alt="ICP Dfinity"
                style={{ height: "40px" }} // Adjust the height as needed
              />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
