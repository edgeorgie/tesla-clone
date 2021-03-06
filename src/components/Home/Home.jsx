import React from "react";
import { Section } from "../Section/Section";
import { Container } from "./Styled";

export const Home = () => {
  return (
    <Container>
      <Section
        title="Model S"
        desc="Order Online for "
        link={<a href="#">Touchless Delivery</a>}
        backgroungImg="model-s.jpg"
        order="Custom Order"
        inventory="Existing Inventory"
        id="model-s"
      />
      <Section
        title="Model 3"
        desc="Order Online for "
        link={<a href="#">Touchless Delivery</a>}
        backgroungImg="model-3.jpg"
        order="Custom Order"
        inventory="Existing Inventory"
        id="model-3"
      />
      <Section
        title="Model X"
        desc="Order Online for "
        link={<a href="#">Touchless Delivery</a>}
        backgroungImg="model-x.jpg"
        order="Custom Order"
        inventory="Existing Inventory"
        id="model-x"
      />
      <Section
        title="Model Y"
        desc="Order Online for "
        link={<a href="#">Touchless Delivery</a>}
        backgroungImg="model-y.jpg"
        order="Custom Order"
        inventory="Existing Inventory"
        id="model-y"
      />
      <Section
        title="Solar Panels"
        desc="Lowest Cost Solar Panels in America"
        backgroungImg="solar-panel.jpg"
        order="Order Now"
        inventory="Learn More"
        id="solar-panels"
      />
      <Section
        title="Solar Roof"
        desc="Produce Clean Energy From Your Roof"
        backgroungImg="solar-roof.jpg"
        order="Order Now"
        inventory="Learn More"
        id="solar-roof"
      />
      <Section
        title="Accessories"
        backgroungImg="accessories.jpg"
        order="Shop Now"
        id='accessories'
      />
    </Container>
  );
};
