import React from "react";
import { Section } from "../Section/Section";
import { Container } from "./Styled";

export const Home = () => {
  return (
    <Container>
      <Section
        title="Model S"
        backgroungImg="model-s.jpg"
        order="S"
        inventory="S"
      />
      <Section
        title="Model 3"
        backgroungImg="model-3.jpg"
        order="3"
        inventory="3"
      />
      <Section
        title="Model X"
        backgroungImg="model-x.jpg"
        order="X"
        inventory="X"
      />
      <Section
        title="Model Y"
        backgroungImg="model-y.jpg"
        order="Y"
        inventory="Y"
      />
    </Container>
  );
};
