import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-image: ${(props) => `url("/images/${props.backgroungImg}")`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const TextContainer = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

export const ButtonsContainer = styled.div`
  display: grid;
  grid-gap: 16px;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const PrimaryButton = styled.button`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: var(--white);
  cursor: pointer;
  border-radius: 32px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 0.8rem;
  &:hover {
    opacity: 1;
  }
`;

export const SecundaryButton = styled(PrimaryButton)`
  background-color: var(--white);
  color: var(--primary);
`;

export const DownArrow = styled.img`
  margin-top: 50px;
  height: 40px;
  animation: animateDown infinite 1.5s;
  padding-bottom: 10px;
`;

export const Buttons = styled.div`
  text-align: center;
  overflow: hidden;
`;
