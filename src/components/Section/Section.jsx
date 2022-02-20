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

export const Section = ({
  title,
  desc,
  link,
  backgroungImg,
  order,
  inventory
}) => {
  return (
    <Wrap backgroungImg={backgroungImg}>
      <TextContainer>
        <h1>{title}</h1>
        <p>
          {desc}
          {link}
        </p>
      </TextContainer>
      <Buttons>
        <ButtonsContainer>
          <PrimaryButton>{order}</PrimaryButton>
          {inventory && <SecundaryButton>{inventory}</SecundaryButton>}
        </ButtonsContainer>
        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
};
