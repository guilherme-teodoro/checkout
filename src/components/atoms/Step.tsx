import styled from "styled-components";

export const StepWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StepItem = styled.div`
  display: flex;
  align-items: center;
`;

export const StepLabel = styled.div`
  color: #de4b4b;
  font-size: 13px;
`;

export const StepCounter = styled.span`
  width: 22px;
  border: 1px solid #de4b4b;
  height: 22px;
  border-radius: 999px;
  color: #de4b4b;
  margin-right: 8px;
  display: flex;
  font-size: 12px;
  font-weight: bold;
  align-items: center;
  justify-content: center;
`;

export const StepDone = styled.span`
  width: 22px;
  border: 1px solid #de4b4b;
  background: #de4b4b url("images/check-icon.svg");
  background-repeat: no-repeat;
  background-position: center;
  height: 22px;
  border-radius: 999px;
  color: white;
  margin-right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StepIcon = styled.span`
  width: 16px;
  height: 16px;
  background: url(images/step-icon.svg);
  margin: 0 24px;
`;
