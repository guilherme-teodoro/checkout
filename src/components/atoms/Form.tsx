import React, { Ref } from "react";
import styled from "styled-components";
import TextMask from "react-input-mask";

type InputProps = {
  invalid: boolean;
};

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid
    ${(props: InputProps) => (props.invalid ? `#EB5757` : `#c9c9c9`)};
  box-shadow: 0px 1px 0px
    ${(props: InputProps) => (props.invalid ? `#EB5757` : `transparent`)};
  font-size: 17px;
  color: #3c3c3c;
  padding: 5px 0;
  outline: none;
  transition: all 0.2s;
  touch-action: manipulation;
  -webkit-appearance: none;
  border-radius: 0;
  cursor: text;
  position: relative;

  &::-webkit-input-placeholder {
    opacity: 0;
    transition: inherit;
    color: #c9c9c9;
  }

  &:placeholder-shown + label {
    cursor: text;
    max-width: 66.6%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transform-origin: left bottom;
    transform: translate(0, 1.6rem) scale(1.4);
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
  maxlength?: string;
  invalid: boolean;
};

type InputMemoProps = {
  inputRef: Ref<HTMLInputElement>;
  maxlength?: string;
  invalid: boolean;
};

const InputMemo = React.memo((props: InputMemoProps) => {
  return <Input ref={props.inputRef} {...props} />;
});

export const MaskedInput = React.forwardRef(
  (props: MaskedInputProps, ref: Ref<HTMLInputElement>) => {
    return (
      <TextMask
        id={props.name}
        name={props.name}
        placeholder={props.placeholder}
        inputRef={ref}
        mask={props.mask}
      >
        <InputMemo
          invalid={props.invalid}
          maxlength={props.maxlength}
          inputRef={ref}
        />
      </TextMask>
    );
  }
);

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

type SelectProps = {
  invalid: boolean;
};

export const Select = styled.select`
  border: none;
  border-bottom: 1px solid
    ${(props: SelectProps) => (props.invalid ? `#EB5757` : `#c9c9c9`)};
  box-shadow: 0px 1px 0px
    ${(props: SelectProps) => (props.invalid ? `#EB5757` : `transparent`)};
  font-size: 17px;
  color: #3c3c3c;
  padding: 5px 0;
  outline: none;
  touch-action: manipulation;
  -webkit-appearance: none;
  border-radius: 0;
  background: transparent;
`;

export const ErrorMessageLabel = styled.span`
  color: #eb5757;
  font-size: 13px;
  position: absolute;
  margin-top: 5px;
`;
