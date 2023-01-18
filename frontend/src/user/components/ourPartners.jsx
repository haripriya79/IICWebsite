import React, { useEffect, useState } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { ComingSoon, Loder } from "../../core/utils";
import { getImages } from "../userApiCalls";

const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: `element-${ind}` }));

function App() {
  const [items, setItems] = useState(getItems);
  const [selected, setSelected] = useState([]);
  const [position, setPosition] = useState(0);
  const [partners, setPartners] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoding] = useState(true);

  const preload = () => {
    getImages("Partners").then((data) => {
      setLoding(false);
      if (data.error) {
        setError("Something went wrong. Try Again");
      } else {
        setPartners(data);
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  if (loading || error) {
    return (
      <div></div>
    );
  } else if (partners && partners.length !== 0) {
    return (
      <div className="row main-container my-5 ">
        <div className="col-12 col-lg-3 p-5 text-center  ">
          <h2 className="h2 fw-semibold lh-long text-black divider-bottom d-inline"  >
            Our Partner
          </h2>        
          
        </div>
        <div className="col-12 col-lg-9">
      
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {partners.map((value, id) => (
          <Card itemId={id} image={value.photo} key={id} />
        ))}
      </ScrollMenu>
      
        </div>
      </div>
      
    );
  } else {
    return (
      <div></div>
    );
  }
}

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } = React.useContext(
    VisibilityContext
  );

  return (
    <button
      disabled={isFirstItemVisible}
      onClick={() => scrollPrev()}
      className={`border-0 rounded-circle my-auto ${
        !isFirstItemVisible ? " d-inline" : " d-none"
      }`}
      style={{ width: "50px", height: "50px" }}
    >
      <span class="material-symbols-outlined m-auto">navigate_before</span>
    </button>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return (
    <button
      disabled={isLastItemVisible}
      onClick={() => scrollNext()}
      className={`border-0 rounded-circle m-auto ${
        !isLastItemVisible ? "d-inline" : "d-none"
      }`}
      style={{ width: "50px", height: "50px" }}
    >
      <span class="material-symbols-outlined">navigate_next</span>
    </button>
  );
}

function Card({ onClick, image }) {
  const visibility = React.useContext(VisibilityContext);

  return (
    <div
      onClick={() => onClick(visibility)}
      style={{
        width: "160px",
      }}
      tabIndex={0}
      className="p-3"
    >
      <img src={image} alt="" />
    </div>
  );
}

export default App;
