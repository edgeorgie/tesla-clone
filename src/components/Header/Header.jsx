import React, { useState } from "react";
import { Container, Menu, RightMenu, FullMenu } from "./Styled";
import { selectCars } from "../../features/car/carSlice";
import { useSelector } from "react-redux";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cars = useSelector(selectCars);
  console.log(cars);

  return (
    <Container>
      <div>
        <a href="/">
          <img src="/images/logo-small.svg" alt="Tesla Logo" />
        </a>
      </div>
      <Menu>
        <ul>
          <li>
            <a href="#model-s">Model S</a>
          </li>
          <li>
            <a href="#model-3">Model 3</a>
          </li>
          <li>
            <a href="#model-x">Model X</a>
          </li>
          <li>
            <a href="#model-y">Model Y</a>
          </li>
          <li>
            <a href="#solar-roof">Solar Roof</a>
          </li>
          <li>
            <a href="#solar-panels">Solar Panels</a>
          </li>
        </ul>
      </Menu>
      <RightMenu>
        <ul>
          <li>
            <a href="/">Shop</a>
          </li>
          <li>
            <a href="/">Account</a>
          </li>
          <li className="menu" onClick={() => setIsOpen(true)}>
            Menu
          </li>
        </ul>
      </RightMenu>
      <FullMenu show={isOpen}>
        <div className="closeWrapper" onClick={() => setIsOpen(false)}>
          <span></span>
          <span></span>
        </div>
        <div>
          {cars &&
            cars.map((car, index) => (
              <li>
                <a key={index} href="/">
                  {car}
                </a>
              </li>
            ))}
          <li>
            <a href="/">Existing Inventory</a>
          </li>
          <li>
            <a href="/">Used Inventory</a>
          </li>
          <li>
            <a href="/">Trade-In</a>
          </li>
          <li>
            <a href="/">Test Drive</a>
          </li>
          <li>
            <a href="/">Cybertruck</a>
          </li>
          <li>
            <a href="/">Roadster</a>
          </li>
          <li>
            <a href="/">Semi</a>
          </li>
          <li>
            <a href="/">Charging</a>
          </li>
          <li>
            <a href="/">Powerwall</a>
          </li>
          <li>
            <a href="/">Commercial Energy</a>
          </li>
          <li>
            <a href="/">Utilities</a>
          </li>
          <li>
            <a href="/">Find Us</a>
          </li>
          <li>
            <a href="/">Support</a>
          </li>
          <li>
            <a href="/">Investor Relations</a>
          </li>
        </div>
      </FullMenu>
    </Container>
  );
};
