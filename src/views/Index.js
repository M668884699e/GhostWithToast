
import React from "react";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

// index sections
import SectionCarousel from "views/index-sections/SectionCarousel.js";
import SectionDark from "views/index-sections/SectionDark.js";
import SectionProgress from "./index-sections/SectionProgress";
import SectionDownload from "./index-sections/SectionDownload";

function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      <IndexNavbar />
      <IndexHeader />
      <div className="main">
        <SectionDownload />
        <SectionCarousel />
        <SectionDark />
        <DemoFooter />
      </div>
    </>
  );
}

export default Index;
