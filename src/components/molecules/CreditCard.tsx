import React from "react";
import styled from "styled-components";
import { Grid, Cell } from "styled-css-grid";
import ReactCardFlip from "react-card-flip";

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

type LogoProps = {
  name: "american" | "visa" | "mastercard" | "none";
};

export const Logo = styled.div`
  background-image: url(images/${(props: LogoProps) => props.name}-logo.svg);
  background-size: cover;
  background-position: top left;
  background-repeat: no-repeat;
  width: 50px;
  height: 50px;
`;

type CreditCardProps = {
  number: string;
  name: string;
  expirationDate: string;
  flip: boolean;
  cvv: string;
};

const getBrand = (firstNumber: string) => {
  switch (firstNumber) {
    case "2":
      return "mastercard";
    case "3":
      return "american";
    case "4":
      return "visa";
    case "5":
      return "mastercard";
    default:
      return "none";
  }
};

export const CreditCard: React.FC<CreditCardProps> = ({
  number,
  name,
  expirationDate,
  flip,
  cvv,
}) => {
  const brand = number ? getBrand(number.substr(0, 1)) : "none";

  return (
    <ReactCardFlip isFlipped={flip}>
      <CardFront active={number ? true : false}>
        <Grid alignContent="space-between" columns="1" height="100%">
          <Logo name={brand} />
          <Number>
            {number
              ? number.replace(/_/g, "*").substr(0, 19)
              : "**** **** **** ****"}
          </Number>
          <Grid justifyContent="space-between" columns={2}>
            <Name>{name ? name : "nome do titular"}</Name>
            <Cell>
              <ExpirationDate>
                {expirationDate ? expirationDate : "00/00"}
              </ExpirationDate>
            </Cell>
          </Grid>
        </Grid>
      </CardFront>
      <CardBack active={cvv ? true : false}>
        <CVV>{cvv ? cvv.padEnd(3, "*") : "***"}</CVV>
      </CardBack>
    </ReactCardFlip>
  );
};
