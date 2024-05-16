import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";

function SectionIntroduction() {
  const [currentPhase, setCurrentPhase] = useState(1); // Current phase is 1

  const renderPhase = (phaseNumber, title, description) => (
    <div className="roadmap-phase" style={{ marginBottom: '15px' }}>
      <h5 style={{
          fontWeight: phaseNumber === currentPhase ? 'bold' : 'normal',
          fontSize: '1.25rem' // Larger font size for better readability
        }}>
        {title}
      </h5>
      <p style={{
          fontSize: '1.1rem', // Increased font size from previous
          color: '#333', // Darker font color for better readability
          fontWeight: '400' // Slightly bolder to improve visibility
        }}>
        {description}
      </p>
    </div>
  );

  return (
    <>
      <div className="section section-roadmap" style={{ paddingTop: '30px', paddingBottom: '30px' }}>
        <Container className="text-center">
          <Row>
            <Col md="12">
              <h2 className="title" style={{ fontWeight: 'bold', fontSize: '2rem' }}>Welcome to Ghosts N' Toasts</h2>
              <p className="description" style={{ fontSize: '1.25rem', color: '#555', fontWeight: '500' }}>
                Discover the thrilling world of Ghosts N' Toasts, where gaming meets blockchain technology.
                Dive into our roadmap to see how we’re enhancing the gaming experience with innovative features
                and community-driven developments.
              </p>
              {/* Image Section */}
              <br/>
              <img src={require("assets/img/ghostwithtoastlogo.png")} alt="GhostWithToast Logo" style={{ maxWidth: '40%', height: 'auto' }} />
              <br/>
            </Col>
          </Row>
          <Row>
            <Col className="ml-auto mr-auto" md="10">
              <h3 className="title" style={{ fontWeight: 'bold', fontSize: '1.75rem', marginBottom: '20px' }}>Explore the Roadmap</h3>
              <br/>
              <Row>
                <Col md="6">
                  {renderPhase(1, "🌟 Phase 1: Community Building and Initial Marketing", "Build a strong community foundation and create buzz around the project.")}
                  <br/>
                  {renderPhase(2, "👥 Phase 2: Token Development and Strategic Partnerships", "Develop the tokenomics and establish key partnerships.")},
                  <br/>
                  {renderPhase(3, "🔍 Phase 3: Prototype Development and Feedback", "Begin development on simplified game prototypes and gather user feedback.")}
                  <br/>
                </Col>
                <Col md="6">
                  {renderPhase(4, "📢 Phase 4: Expanded Marketing and Community Events", "Ramp up marketing efforts and host community events.")}
                  <br/>
                  {renderPhase(5, "🚀 Phase 5: Full Game Development and Beta Testing", "Develop full versions of selected games and conduct extensive beta testing.")}
                  <br/>
                  {renderPhase(6, "🎮 Phase 6: Official Launch and Scaling", "Launch the games publicly and scale the platform.")}
                  <br/>
                  {renderPhase(7, "💎 Phase 7: Sustainability and Expansion", "Ensure long-term engagement and expand the platform’s features.")}
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionIntroduction;
