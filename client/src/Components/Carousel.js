import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import SimpleCard from "./Demo";
import Item from "./Item";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

export default function CarouselSlider() {
  return (
    <div className="Ap">
      <Carousel breakPoints={breakPoints}>
        <Item>
          <SimpleCard style={{ margin: "5px" }} />
        </Item>
        <Item>
          <SimpleCard style={{ margin: "5px" }} />
        </Item>
        <Item>
          <SimpleCard style={{ margin: "5px" }} />
        </Item>
        <Item>
          <SimpleCard style={{ margin: "5px" }} />
        </Item>
        <Item>
          <SimpleCard style={{ margin: "5px" }} />
        </Item>
      </Carousel>
    </div>
  );
}
