/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
 
  return (
      <div className="page-header clear-filter" filter-color="blue" 
      style={{ 
        height: '400px', 
        backgroundImage: "url(" + require("../../assets/img/header.jpg") + ")", 
        backgroundSize: '100%',
        color: 'white', 
        textAlign: 'center',
        }}>
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("../../assets/img/header.jpg") + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <img
              alt="..."
              style={{marginTop: '35px'}}
              className="n-logo"
              src={require("../../assets/img/logo.png")}
            ></img>
            <br />
            <h1 className="h1-seo">Immedia</h1>
            <h3>A Digital Future Fused With Humanity</h3>
          </div>
         
        </Container>
      </div>
  );
}

export default IndexHeader;
