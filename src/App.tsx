import React from "react";
import "./App.css";
import { Checkout } from "./components/organisms/Form";
import "normalize.css";
import { useForm } from "react-hook-form";
import { Continue } from "./components/molecules/Button";
import { CreditCard } from "./components/molecules/CreditCard";

type FormData = {
  cardName: string;
  cardNumber: string;
  cardCVV: string;
  cardValidate: string;
  installmentNumber: number;
};

export default function App() {
  const { handleSubmit, watch, register, errors } = useForm<FormData>();
  const [isFlipped, changeFlip] = React.useState<boolean>(false);
  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  const watchAllFields = watch();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Checkout
        register={register}
        onFocusCVV={() => changeFlip(true)}
        onBlurCVV={() => changeFlip(false)}
      />
      <Continue type="submit" />
      <CreditCard
        flip={isFlipped}
        number={watchAllFields.cardNumber}
        name={watchAllFields.cardName}
        expirationDate={watchAllFields.cardValidate}
        cvv={watchAllFields.cardCVV}
      />
    </form>
  );
}
