import React, { Ref, DetailedHTMLProps, InputHTMLAttributes } from "react";
import { Field, Input, Label, MaskedInput, Select } from "../atoms/Form";
import { range, formatCurrency } from "../../util";

type Props = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const CardNumber = React.forwardRef(
  (props: Props, ref: Ref<HTMLInputElement>) => {
    return (
      <Field>
        <MaskedInput
          placeholder="0000 0000 0000 0000"
          id="cardNumber"
          mask={"9999 9999 9999 9999"}
          ref={ref}
          maxlength="18"
          name="cardNumber"
        />
        <Label htmlFor="cardNumber">Número do cartão</Label>
      </Field>
    );
  }
);

export const CardName = React.forwardRef(
  (props: Props, ref: Ref<HTMLInputElement>) => {
    return (
      <Field>
        <Input
          ref={ref}
          placeholder="José da Silva"
          id="cardName"
          name="cardName"
        />
        <Label htmlFor="cardName">Nome (igual ao cartão)</Label>
      </Field>
    );
  }
);

export const ExpirationDate = React.forwardRef(
  (props: Props, ref: Ref<HTMLInputElement>) => {
    return (
      <Field>
        <MaskedInput
          mask={"99/99"}
          ref={ref}
          placeholder="12/20"
          id="expirationDate"
          name="expirationDate"
        />
        <Label htmlFor="expirationDate">Validade</Label>
      </Field>
    );
  }
);

export const CardCVV = React.forwardRef(
  (props: Props, ref: Ref<HTMLInputElement>) => {
    return (
      <Field>
        <Input
          ref={ref}
          onBlur={props.onBlur}
          onFocus={props.onFocus}
          maxLength={3}
          placeholder="123"
          id="cardCVV"
          name="cardCVV"
        />
        <Label htmlFor="cardCVV">CVV</Label>
      </Field>
    );
  }
);

type InstallmentsNumberProps = {
  maxInstallments: number;
  amount: number;
};

export const InstallmentsNumber = React.forwardRef((props: InstallmentsNumberProps, ref: Ref<HTMLSelectElement>) => {
  return (
    <Field>
      <Select name="installmentNumber" ref={ref}>
        {range(1, props.maxInstallments).map((installment) => {
          return (
            <option key={installment} value={installment}>
              {installment}x {formatCurrency((props.amount / installment))} sem juros
            </option>
          );
        })}
      </Select>
    </Field>
  );
});
