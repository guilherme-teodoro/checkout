import React, { Ref } from "react";
import styled from "styled-components";
import TextMask from "react-input-mask";

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid #c9c9c9;
  font-size: 17px;
  color: #3c3c3c;
  padding: 5px 0;
  outline: none;
  transition: all 0.2s;
  touch-action: manipulation;
  -webkit-appearance: none;
  border-radius: 0;
  cursor: text;

  &::-webkit-input-placeholder {
    opacity: 0;
    transition: inherit;
  }

  &:placeholder-shown + label {
    cursor: text;
    max-width: 66.6%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transform-origin: left bottom;
    transform: translate(0, 1.60rem) scale(1.4);
  }

  &:not(:placeholder-shown) + label,
  &:focus + label {
    transform: translate(0, 0) scale(1);
    cursor: pointer;
  }

  &:focus::-webkit-input-placeholder {
    opacity: 1;
  }
`;

type MaskedInputProps = {
  placeholder: string;
  mask: string;
  id: string;
  name: string;
};

type InputMemoProps = {
  inputRef: Ref<HTMLInputElement>;
};

const InputMemo = React.memo((props: InputMemoProps) => {
  return <Input ref={props.inputRef} {...props} />;
});

export const MaskedInput = React.forwardRef((props: MaskedInputProps, ref: Ref<HTMLInputElement>) => {  
  return (
    <TextMask id={props.name} name={props.name} placeholder={props.placeholder} inputRef={ref} mask={props.mask}>
      <InputMemo inputRef={ref} />
    </TextMask>
  );
});

export const Label = styled.label`
  color: #c9c9c9;
  transition: all 0.2s;
  touch-action: manipulation;
  font-size: 12px;
`;

export const Field = styled.div`
  display: flex;
  flex-flow: column-reverse;
  width: 100%;
`;

export const Select = styled.select`
  border: none;
  border-bottom: 1px solid #c9c9c9;
  font-size: 17px;
  color: #3c3c3c;
  padding: 5px 0;
  outline: none;
  touch-action: manipulation;
  -webkit-appearance: none;
  border-radius: 0;
  background: transparent;
`;