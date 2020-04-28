import React from "react";
import {
  StepWrapper,
  StepItem,
  StepDone,
  StepLabel,
  StepCounter,
  StepIcon,
} from "../atoms/Step";
import { intersperse } from "../../util";

type Step = {
  label: string;
  done: boolean;
  counter: number;
};

type StepProps = {
  steps: Array<Step>;
};

export const Step: React.FC<StepProps> = ({ steps }) => {
  return (
    <StepWrapper>
      {intersperse(
        steps.map(({ label, done, counter }) => {
          return (
            <StepItem key={label}>
              {done ? <StepDone /> : <StepCounter>{counter}</StepCounter>}
              <StepLabel>{label}</StepLabel>
            </StepItem>
          );
        }),
        <StepIcon />
      )}
    </StepWrapper>
  );
};