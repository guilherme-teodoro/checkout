import React from "react";
import { render, fireEvent, act, wait } from "@testing-library/react";
import { waitFor } from "@testing-library/dom";
import App from "./App";
import { ThemeProvider } from "styled-components";
import userEvent from "@testing-library/user-event";

const theme = {
  breakpoints: {
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
  },
};

test("app (static elements)", () => {
  const { getByText, getByTestId } = render(
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );

  expect(getByText(/Adicione um novo cartão de crédito/i)).toBeInTheDocument();
  expect(getByText(/Alterar forma de pagamento/i)).toBeInTheDocument();

  expect(getByText(/Carrinho/i)).toBeInTheDocument();
  expect(getByText(/Pagamento/g)).toBeInTheDocument();
  expect(getByText(/Confirmação/g)).toBeInTheDocument();
  expect(getByText(/1x R\$1,200.00 sem juros/g)).toBeInTheDocument();
  expect(getByTestId("step-mobile")).toBeInTheDocument();
});

test("form validation", async () => {
  const { getByText } = render(
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );

  await act(async () => {
    const submitButton = getByText(/Continuar/i);
    fireEvent.click(submitButton);
  });

  expect(getByText(/Número de cartão inválido/i)).toBeInTheDocument();
  expect(getByText(/Insira seu nome completo/i)).toBeInTheDocument();
  expect(getByText(/Data inválida/i)).toBeInTheDocument();
  expect(getByText(/Código inválido/i)).toBeInTheDocument();
});

test("form change with card binding display and submit", async () => {
  const { getByTestId, getByText, getByLabelText } = render(
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );

  fireEvent.input(getByLabelText("Nome (igual ao cartão)"), {
    target: { value: "Jonh" },
  });
  fireEvent.input(getByLabelText("CVV"), {
    target: { value: "123" },
  });
  fireEvent.input(getByTestId("installment"), {
    target: { value: "2" },
  });

  await userEvent.type(
    getByLabelText("Número do cartão"),
    "4451080149829176"
  );

  await userEvent.type(getByLabelText("Validade"), "12/27");

  await wait();

  expect(getByTestId("card-number").innerHTML).toEqual("4451 0801 4982 9176");
  expect(getByTestId("card-name").innerHTML).toEqual("Jonh");
  expect(getByTestId("card-cvv").innerHTML).toEqual("123");
  expect(getByTestId("card-expiration-date").innerHTML).toEqual("12/27");

  await act(async () => {
    const submitButton = getByText(/Continuar/i);
    fireEvent.click(submitButton);
  });

  await wait();

  expect(getByText(/Cartão cadastrado com sucesso!/i)).toBeInTheDocument();
});

test("expiration date validation", async () => {
  const { getByText, getByLabelText } = render(
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );

  await userEvent.type(getByLabelText("Validade"), "12/19");

  await act(async () => {
    const submitButton = getByText(/Continuar/i);
    fireEvent.click(submitButton);
  });

  expect(getByText(/Data inválida/i)).toBeInTheDocument();
});