import React from "react";
import styled from "styled-components";

export const Sidebar = styled.div`
  background: #de4b4b;
  height: 100%;
  position: relative;
  width: 272px;
  padding-top: 50px;

  &::before {
    content: "";
    background: #de4b4b;
    width: 100vw;
    left: -100vw;
    top: 0;
    height: 100%;
    bottom: 0;
    position: absolute;
  }
`;

export const Container = styled.div`
  max-width: 940px;
  margin: 0 auto;
  height: 100%;
  display: flex;
`;

const BackLabel = styled.div`
  font-size: 13px;
  margin-left: 10px;
`;

const BackWrapper = styled.a`
  display: flex;
  color: white;
  align-items: center;
  text-decoration: none;
`;

export const Back: React.FC<{}> = (props) => {
  return (
    <BackWrapper href="#">
      <span><img alt="Voltar" src="images/back-icon.svg" /></span>
      <BackLabel>{props.children}</BackLabel>
    </BackWrapper>
  );
};

const TitleLabel = styled.h1`
  font-weight: bold;
  color: white;
  font-size: 20px;
  margin-left: 20px;
`;

const TitleWrapper = styled.div`
  display: flex;
  margin-top: 50px;
  margin-bottom: 20px;
`;

export const Title: React.FC<{}> = (props) => {
  return (
    <TitleWrapper>
      <img alt="Cartão de crédito (icone)" src="images/credit-card-icon.svg" />
      <TitleLabel>{props.children}</TitleLabel>
    </TitleWrapper>
  );
};

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Content = styled.div`
  width: 100%;
  margin-left: 170px;
  padding-top: 50px;
`;
