import styled from "styled-components";
import { down } from "styled-breakpoints";

export default styled.button`
  background: #de4b4b;
  border-radius: 10px;
  text-transform: uppercase;
  font-size: 17px;
  padding: 16px 70px;
  border: none;
  color: white;


  ${down('md')} {
    padding: 16px 16px;
    width: 100%;
  }
`;
