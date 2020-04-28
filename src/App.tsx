import React from "react";
import "./App.css";
import { Checkout } from "./components/organisms/Form";
import "normalize.css";
import { useForm } from "react-hook-form";
import { Continue } from "./components/molecules/Button";
import { CreditCard } from "./components/molecules/CreditCard";
import { Step } from "./components/molecules/Step";
import { Grid, Cell } from "styled-css-grid";
import {
  Sidebar,
  Container,
  Back,
  Title,
  Footer,
  Content,
} from "./components/atoms/Layout";

type FormData = {
  cardName: string;
  cardNumber: string;
  cardCVV: string;
  expirationDate: string;
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
    <Container>
      <Sidebar>
        <Back>Alterar forma de pagamento</Back>
        <Title>Adicione um novo cartão de crédito</Title>
        <CreditCard
          flip={isFlipped}
          number={watchAllFields.cardNumber}
          name={watchAllFields.cardName}
          expirationDate={watchAllFields.expirationDate}
          cvv={watchAllFields.cardCVV}
        />
      </Sidebar>
      <Content>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid columns={1} rowGap="30px">
            <Step
              steps={[
                { counter: 1, label: "Carrinho", done: true },
                { counter: 2, label: "Pagamento", done: false },
                { counter: 3, label: "Confirmação", done: false },
              ]}
            />
            <Cell>
              <Checkout
                register={register}
                onFocusCVV={() => changeFlip(true)}
                onBlurCVV={() => changeFlip(false)}
              />
            </Cell>
            <Cell>
              <Footer>
                <Continue type="submit" />
              </Footer>
            </Cell>
          </Grid>
        </form>
      </Content>
    </Container>
  );
}
