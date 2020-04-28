import styled from "styled-components";

type CardFrontProps = {
  active: boolean;
};

export const CardFront = styled.div`
  width: 364px;
  height: 240px;
  transition: background 0.2s;
  background: url(${(props: CardFrontProps) =>
      props.active
        ? "images/credit-card-bg.svg"
        : "images/credit-card-inactive.svg"})
    no-repeat;
  position: relative;
  padding: 30px;
  padding-bottom: 45px;
`;

export const CardBack = styled.div`
  width: 364px;
  height: 240px;
  transition: background 0.2s;
  background: url(${(props: CardFrontProps) =>
      props.active
        ? "images/credit-card-back.svg"
        : "images/credit-card-back-inactive.svg"})
    no-repeat;
  position: relative;
  padding: 30px;
  padding-bottom: 45px;
`;

export const Number = styled.div`
  text-align: center;
  font-family: monospace;
  font-size: 22.82px;
  letter-spacing: 2.31px;
  color: #ffffff;
  text-shadow: 0px 1px 2px #000000b3;
  opacity: 1;
`;

export const Name = styled.div`
  font-size: 16px;
  color: #ffffff;
  text-shadow: 0px 1px 2px #000000b3;
  text-transform: uppercase;
`;

export const ExpirationDate = styled.div`
  font-size: 16px;
  color: #ffffff;
  text-shadow: 0px 1px 2px #000000b3;
  text-align: right;
`;

export const CVV = styled.div`
  position: absolute;
  left: 180px;
  top: 112px;
  letter-spacing: 3px;
  font-family: monospace;
`;

export type Brands = "american" | "visa" | "mastercard" | "none";

type LogoProps = {
  name: Brands
};

export const Logo = styled.div`
  background-image: url(images/${(props: LogoProps) => props.name}-logo.svg);
  background-size: cover;
  background-position: top left;
  background-repeat: no-repeat;
  width: 50px;
  height: 50px;
`;