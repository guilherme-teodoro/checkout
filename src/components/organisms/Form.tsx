import React from "react";
import {
  CardName,
  CardNumber,
  CardCCV,
  CardValidate,
  InstallmentsNumber,
} from "../molecules/Form";
import { Continue } from "../molecules/Button";
import { useForm } from "react-hook-form";

type FormData = {
  cardName: String;
  cardNumber: String;
  cardCCV: String;
  cardValidate: String;
  installmentNumber: Number;
};

export const Checkout = () => {
  const { handleSubmit, watch, register, errors } = useForm<FormData>();
  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  const watchAllFields = watch();
  console.log(watchAllFields);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CardNumber ref={register({ required: "required" })} />
      <CardName ref={register({ required: "required" })} />
      <CardCCV ref={register({ required: "required" })} />
      <CardValidate ref={register({ required: "required" })} />
      <InstallmentsNumber
        ref={register({ required: "required" })}
        maxInstallments={12}
        amount={1200.00}
      />
      <Continue type="submit">Vai</Continue>
      {JSON.stringify(watchAllFields)}
    </form>
  );
};
