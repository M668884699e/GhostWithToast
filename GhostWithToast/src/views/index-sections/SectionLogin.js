import React from "react";
import { Button, Container, Row, Col } from "reactstrap";

const nftItems = [
  { name: 'Avocado Ghost', price: '0.7 ICP', image: 'avoc_ghost.webp' },
  { name: 'Bronze Tier Ghost', price: '0.9 ICP', image: 'bronze_tier_ghost.webp' },
  { name: 'Diamond Ghost', price: '1.2 ICP', image: 'diamondghost.webp' },
  { name: 'Gamestop Baby Ghost', price: '0.8 ICP', image: 'gamestop_baby_ghost.webp' },
  { name: 'God Tier Ghost', price: '2.5 ICP', image: 'godtierghost.webp' },
  { name: 'Gold Diamond Ghost', price: '1.5 ICP', image: 'golddiamondghost.webp' },
  { name: 'Nutella Ghost', price: '0.6 ICP', image: 'nutella_ghost.webp' },
  { name: 'Silver Dab Ghost', price: '0.9 ICP', image: 'silver_dab_ghost.webp' }
];

function SectionLogin() {
  return (
    <>
      <div
        className="section section-image section-login"
        style={{
          backgroundImage: "url(" + require("assets/img/NFT_background.webp") + ")",
        }}
      >
        <Container>
          <Row>
            <Col className="mx-auto" lg="10" md="12">
              <div className="marketplace-content">
                <h3 className="title mx-auto">Explore Exclusive Ghosts N' Toasts NFTs</h3>
                <div className="nft-items row">
                  {nftItems.map((item, index) => (
                    <Col md="4" className="nft-item" key={index}>
                      <div className="nft-card">
                        <img
                          src={require(`assets/img/${item.image}`)}
                          alt={item.name}
                          className="nft-image"
                        />
                        <div className="nft-info text-center">
                          <h5>{item.name}</h5>
                          <p>{item.price}</p>
                          <Button className="btn-round" color="primary">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </Col>
                  ))}
                </div>
                <div className="col text-center mt-4">
                  <Button
                    className="btn-round"
                    color="neutral"
                    href="/marketplace"
                    size="lg"
                    target="_blank"
                  >
                    Visit Full Marketplace
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionLogin;
