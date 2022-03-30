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
  overflow-y: scroll;
`;

export const TextContainer = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const PrimaryButton = styled.button`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: var(--white);
  cursor: pointer;
  border-radius: 32px;
  justify-content: center;
  align-items: center;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 0.8rem;
  margin: 8px;
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
  overflow: hidden;
`;

export const Buttons = styled.div`
  text-align: center;
  overflow: hidden;
`;
