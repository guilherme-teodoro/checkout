import React from "react";
import { Grid, Cell } from "styled-css-grid";
import ReactCardFlip from "react-card-flip";
import {
  CardWrapper,
  CardFront,
  CardBack,
  Logo,
  Number,
  Name,
  ExpirationDate,
  CVV,
  Brands,
} from "../atoms/CreditCard";

const getBrand = (firstNumber: string): Brands => {
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

type CreditCardProps = {
  number: string;
  name: string;
  expirationDate: string;
  flip: boolean;
  cvv: string;
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
    <CardWrapper>
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
    </CardWrapper>
  );
};
