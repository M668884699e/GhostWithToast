import React from "react";

// reactstrap components
import {
  Card,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

// core components

const items = [
  {
    src: require("assets/img/games/flappy_ghosts.webp"),
    altText: "Flappy Ghosts",
    caption: "Flappy Ghosts: Tap to fly through obstacles!"
  },
  {
    src: require("assets/img/games/ghost_crush.webp"),
    altText: "Ghost Crush",
    caption: "Ghost Crush: Match and crush ghosts n' toasts!"
  },
  {
    src: require("assets/img/games/ghost_machines.png"),
    altText: "Ghost Machine",
    caption: "Ghost Machines: Control the claws and win big!"
  },
  {
    src: require("assets/img/games/ghost_runner.png"),
    altText: "Ghost Runner",
    caption: "Ghost Runner: Dash and dodge through spooky levels!"
  },
  {
    src: require("assets/img/games/ghost_slots.png"),
    altText: "Ghost Slots",
    caption: "Ghost Slots: Try your luck with ghost-themed slots!"
  },
  {
    src: require("assets/img/games/snake_ghost.webp"),
    altText: "Snake Ghost",
    caption: "Snake Ghost: Eat to grow and avoid the walls!"
  },
  {
    src: require("assets/img/games/angry_ghosts.webp"),
    altText: "Angry Ghosts",
    caption: "Angry Ghosts: Launch and smash through levels!"
  }
];

function SectionCarousel() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>
      <div className="section pt-0" id="carousel">
        <h4 className="text-center">
          Upcoming Games
        </h4>
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="8">
              <Card className="page-carousel">
                <Carousel
                  activeIndex={activeIndex}
                  next={next}
                  previous={previous}
                >
                  <CarouselIndicators
                    items={items}
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex}
                  />
                  {items.map((item, index) => {
                    return (
                      <CarouselItem
                        onExiting={onExiting}
                        onExited={onExited}
                        key={index}
                      >
                        <img src={item.src} alt={item.altText} />
                        <CarouselCaption
                          captionText={item.caption}
                          captionHeader={item.altText}
                        />
                      </CarouselItem>
                    );
                  })}
                  <a
                    className="left carousel-control carousel-control-prev"
                    data-slide="prev"
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      previous();
                    }}
                    role="button"
                  >
                    <span className="fa fa-angle-left" />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="right carousel-control carousel-control-next"
                    data-slide="next"
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      next();
                    }}
                    role="button"
                  >
                    <span className="fa fa-angle-right" />
                    <span className="sr-only">Next</span>
                  </a>
                </Carousel>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionCarousel;
