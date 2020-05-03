import React, { Ref } from "react";
import { Field, Input, Label, MaskedInput, Select, ErrorMessageLabel } from "../atoms/Form";
import { range, formatCurrency } from "../../util";

type Props = {
  onBlur?: any;
  onFocus?: any;
  invalid: any;
}

export const CardNumber = React.forwardRef(
  (props: Props, ref: Ref<HTMLInputElement>) => {
    return (
      <Field>
        <MaskedInput
          placeholder="0000 0000 0000 0000"
          invalid={props.invalid}
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
          invalid={props.invalid}
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
          invalid={props.invalid}
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
          invalid={props.invalid}
        />
        <Label htmlFor="cardCVV">CVV</Label>
      </Field>
    );
  }
);

type InstallmentsNumberProps = {
  maxInstallments: number;
  amount: number;
  invalid: boolean;
};

export const InstallmentsNumber = React.forwardRef((props: InstallmentsNumberProps, ref: Ref<HTMLSelectElement>) => {
  return (
    <Field>
      <Select invalid={props.invalid} data-testid="installment" name="installmentNumber" ref={ref}>
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

type ErrorLabelProps = {
  children: string;
  show: boolean;
}

export const ErrorLabel: React.FC<ErrorLabelProps> = (props) => {
    return props.show ? <ErrorMessageLabel>{props.children}</ErrorMessageLabel> : null;
}