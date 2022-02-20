import React from "react";
import {
  Wrap,
  TextContainer,
  ButtonsContainer,
  PrimaryButton,
  SecundaryButton,
  DownArrow,
  Buttons
} from "./Styled";

export const Section = ({ title, backgroungImg, order, inventory }) => {
  return (
    <Wrap backgroungImg={backgroungImg}>
      <TextContainer>
        <h1>{title}</h1>
        <p>
          Order Online for <a href="#">Touchless Delivery</a>
        </p>
      </TextContainer>
      <Buttons>
        <ButtonsContainer>
          <PrimaryButton order={order}>Custom Order</PrimaryButton>
          <SecundaryButton inventory={inventory}>
            Existing Inventory
          </SecundaryButton>
        </ButtonsContainer>
        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
};
