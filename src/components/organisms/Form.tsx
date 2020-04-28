import React from "react";
import {
  CardName,
  CardNumber,
  CardCVV,
  ExpirationDate,
  InstallmentsNumber,
  ErrorLabel,
} from "../molecules/Form";
import { Grid, Cell } from "styled-css-grid";

type CheckoutProps = {
  register: any;
  onBlurCVV: any;
  onFocusCVV: any;
  errors: any;
};

export const Checkout: React.FC<CheckoutProps> = ({
  register,
  onBlurCVV,
  onFocusCVV,
  errors,
}) => {
  
  const numberRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;

  return (
    <Grid columns={2} rowGap="30px" columnGap="20px">
      <Cell width={2}>
        <CardNumber
          invalid={errors.cardNumber}
          ref={register({
            validate: {
              number: (v: string) => {
                return v.replace(/ /g, "").match(numberRegex) !== null;
              },
            },
          })}
        />
        <ErrorLabel show={errors.cardNumber}>
          Número de cartão inválido
        </ErrorLabel>
      </Cell>
      <Cell width={2}>
        <CardName
          invalid={errors.cardName}
          ref={register({ required: true })}
        />
        <ErrorLabel show={errors.cardName}>
          Insira seu nome completo
        </ErrorLabel>
      </Cell>
      <Cell width={1}>
        <CardCVV
          invalid={errors.cardCVV}
          onBlur={onBlurCVV}
          onFocus={onFocusCVV}
          ref={register({
            validate: {
              cvv: (v: string) => v.length === 3,
            },
          })}
        />
        <ErrorLabel show={errors.cardCVV}>Código inválido</ErrorLabel>
      </Cell>
      <Cell width={1}>
        <ExpirationDate
          invalid={errors.expirationDate}
          ref={register({ 
            required: true,
            validate: {
            date: (v: string) => {
              const now = new Date();
              let date = new Date();
              const [ month, year ] = v.split("/");
              date.setFullYear(parseInt(year) + 2000, parseInt(month) - 1, 1);
              return date > now;
            }
          } })}
        />
        <ErrorLabel show={errors.expirationDate}>Data inválida</ErrorLabel>
      </Cell>
      <Cell width={2}>
        <InstallmentsNumber
          invalid={errors.innstallmentsNumber}
          ref={register({ required: true })}
          maxInstallments={12}
          amount={1200.0}
        />
      </Cell>
    </Grid>
  );
};
