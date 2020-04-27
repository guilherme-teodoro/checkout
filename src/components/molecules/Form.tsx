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
          mask={"9999 99999 99999 99999"}
          ref={ref}
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

export const CardValidate = React.forwardRef(
  (props: Props, ref: Ref<HTMLInputElement>) => {
    return (
      <Field>
        <MaskedInput
          mask={"99/99"}
          ref={ref}
          placeholder="12/20"
          id="cardValidate"
          name="cardValidate"
        />
        <Label htmlFor="cardValidate">Validade</Label>
      </Field>
    );
  }
);

export const CardCCV = React.forwardRef(
  (props: Props, ref: Ref<HTMLInputElement>) => {
    return (
      <Field>
        <MaskedInput
          ref={ref}
          mask={"999"}
          placeholder="123"
          id="cardCCV"
          name="cardCCV"
        />
        <Label htmlFor="cardCCV">CCV</Label>
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
