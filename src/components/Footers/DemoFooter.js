
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

function DemoFooter() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a
                  href=""
                  target="_blank"
                >
                  FACEBOOK
                </a>
              </li>
              <li>
                <a
                  href=""
                  target="_blank"
                >
                  TWITTER
                </a>
              </li>
              <li>
                <a
                  href=""
                  target="_blank"
                >
                  INSTAGRAM
                </a>
              </li>
            </ul>
          </nav>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
