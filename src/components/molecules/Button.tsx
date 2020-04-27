import React from "react";
import Button from "../atoms/Button";

type ContinueProps = {
  type: "button" | "submit"
}

export const Continue: React.FC<ContinueProps> = ({ type }) => {
  return <Button type={type}>Continuar</Button>
}