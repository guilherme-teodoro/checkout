import React, { Ref } from "react";
import {
  CardName,
  CardNumber,
  CardCVV,
  CardValidate,
  InstallmentsNumber,
} from "../molecules/Form";
import { Grid, Cell } from "styled-css-grid";

type CheckoutProps = {
  register: any;
  onBlurCVV: any;
  onFocusCVV: any;
};

export const Checkout: React.FC<CheckoutProps> = ({
  register,
  onBlurCVV,
  onFocusCVV,
}) => {
  return (
    <Grid columns={2} rowGap="30px" columnGap="20px">
      <Cell width={2}>
        <CardNumber ref={register({ required: "required" })} />
      </Cell>
      <Cell width={2}>
        <CardName ref={register({ required: "required" })} />
      </Cell>
      <Cell width={1}>
        <CardCVV
          onBlur={onBlurCVV}
          onFocus={onFocusCVV}
          ref={register({ required: "required" })}
        />
      </Cell>
      <Cell width={1}>
        <CardValidate ref={register({ required: "required" })} />
      </Cell>
      <Cell width={2}>
        <InstallmentsNumber
          ref={register({ required: "required" })}
          maxInstallments={12}
          amount={1200.0}
        />
      </Cell>
    </Grid>
  );
};
