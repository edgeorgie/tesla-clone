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
import Fade from "react-reveal/Fade";

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
      <Fade bottom>
        <TextContainer>
          <h1>{title}</h1>
          <p>
            {desc}
            {link}
          </p>
        </TextContainer>
      </Fade>
      <Buttons>
        <Fade bottom>
          <ButtonsContainer>
            <PrimaryButton>{order}</PrimaryButton>
            {inventory && <SecundaryButton>{inventory}</SecundaryButton>}
          </ButtonsContainer>
        </Fade>
        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
};
