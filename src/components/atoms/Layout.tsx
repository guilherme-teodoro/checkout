import React from "react";
import styled from "styled-components";
import { down } from "styled-breakpoints";

export const Container = styled.div`
  max-width: 940px;
  margin: 0 auto;
  height: 100%;
  display: flex;

  ${down("md")} {
    flex-direction: column;
  }
`;

export const Sidebar = styled.div`
  background: #de4b4b;
  flex: none;
  height: 100%;
  position: relative;
  width: 272px;
  padding-top: 50px;

  ${down("md")} {
    width: 100%;
    height: auto;
    padding: 25px 25px 0;
  }

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

  ${down("md")} {
    &::before {
      top: auto;
      width: 100%;
      height: 80px;
      bottom: 0;
      left: 0;
      right: 0;
      background: white;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  padding-left: 170px;
  padding-top: 50px;

  ${down("md")} {
    padding: 25px;
  }
`;

const BackLabel = styled.div`
  font-size: 13px;
  margin-left: 10px;

  ${down("md")} {
    display: none;
  }
`;

const BackWrapper = styled.a`
  display: flex;
  color: white;
  align-items: center;
  text-decoration: none;
  position: relative;

  ${down("md")} {
    span {
      position: absolute;
      left: -10px;
    }
    span > img {
      width: 25px;
    }
  }
`;

export const Back: React.FC<{}> = (props) => {
  return (
    <BackWrapper href="#">
      <span>
        <img alt="Voltar" src="images/back-icon.svg" />
      </span>
      <BackLabel>{props.children}</BackLabel>
    </BackWrapper>
  );
};

const TitleLabel = styled.h1`
  font-weight: bold;
  color: white;
  font-size: 20px;
  margin-left: 20px;
  ${down("md")} {
    font-size: 16px;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  margin-top: 50px;
  margin-bottom: 20px;

  ${down("md")} {
    margin-top: 20px;
    margin-bottom: 0;
    padding: 0 50px;
  }
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

  ${down("md")} {
    justify-content: center;
  }
`;

export const SidebarTitle = styled.div`
  ${down("md")} {
    display: flex;
    align-items: center;
  }
`;
