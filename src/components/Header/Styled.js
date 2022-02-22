import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: fixed;
  padding: 0 20px;
  min-height: 60px;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  z-index: 1;
`;

export const Menu = styled.nav`
  ul {
    display: flex;
    font-weight: bold;
  }

  li {
    padding: 10px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const RightMenu = styled.nav`
  ul {
    display: flex;
    font-weight: bold;
  }

  li {
    padding: 10px;
  }

  .menu {
    cursor: pointer;
  }
`;

export const FullMenu = styled.div`
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  flex-direction: column;
  position: fixed;
  top: 0px;
  right: 0px;
  background: var(--white);
  width: 25%;
  height: 100vh;
  align-items: flex-start;
  justify-content: center;
  padding: 40px;
  z-index: 100;
  transition: transform 0.2s;
  li {
    padding: 10px 12px;
    overflow: hidden;
    font-weight: bold;
  }
  li:hover {
    background: rgb(57, 60, 65, 0.05);
    border-radius: 10px;
  }

  div span {
    position: fixed;
    top: 20px;
    right: 10px;
    width: 20px;
    height: 2px;
    background: var(--primary);
    margin: 10px 0;
    transform: rotate(-45deg) translate(-5px, -5px);
    cursor: pointer;
  }

  div span:last-child {
    position: fixed;
    top: 20px;
    right: 10px;
    width: 20px;
    height: 2px;
    background: var(--primary);
    margin: 10px 0;
    transform: rotate(45deg) translate(-5px, 5px);
    cursor: pointer;
  }

  .closeWrapper {
    display: flex;
  }
`;
