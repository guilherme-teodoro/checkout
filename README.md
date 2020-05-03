# checkout

Um formulário simulando o cadastro de cartão de crédito no checkout de um ecommerce. 

## O que foi usado

### Aplicação
- `create-react-app`
- `react` 
- `react-dom`
- `react-hook-forms`
- `react-input-mask`
- `styled-components`

### Testes
- `testing-library`
- `jest`


## Começando
```
# Instalar dependencias
$ yarn

# Subindo a aplicação
$ yarn start
```
Abrir no browser em `http://localhost:3000` 

## Testes
```
$ yarn test
```

#### Issues
Os testes estão retornando alguns warning por conta do `react-input-mask` que funciona apenas utilizando o metodo `userEvent.type` da `testing-library` (conforme essa issue https://github.com/sanniassin/react-input-mask/issues/174). Mas os testes estão passando e parecem estar corretos. Não estou completamente familiariazado com o `testing-library`..

## Buildando para produção
```
$ yarn build
```
