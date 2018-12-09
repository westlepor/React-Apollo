import React from "react";
import styled from "styled-components";
import { Column, Text, Title, Subtitle, Row } from "../../theme/index";

const Wrapper = styled.div`
  height: 100%;
  width: 85%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6em 0 4em 0;
  @media (max-width: 780px) {
    width: 95%;
    padding: 1em 0;
    text-align: center;
    padding: 3em 0 1.5em 0;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 50px;
  margin: 0 auto;
  margin-top: 2em;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-auto-rows: 495px;
  height: 100%;
  width: 80%;
  @media (max-width: 780px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-auto-rows: 375px;
    width: 95%;
    margin: 0 auto;
  }
`;

const Div = styled.div`
  width: 100%;
  height: 100%;
  border: 1.5px solid #a1aeb7;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f2f5f7;
  cursor: pointer;
  transition: 750ms;
  text-align: center;
  &:hover {
    background: #fff;
    border: 1.5px solid #b9402d;
  }
`;

const Icon = styled.i`
  font-size: 4em;
  color: #b9402d;
  @media (max-width: 780px) {
    font-size: 3em;
  }
  @media (max-width: 400px) {
    font-size: 2em;
  }
`;

const StyledRow = styled(Row)`
  justify-content: space-between;
  align-items: center;
  width: 75%;
  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
    margin: 1em auto;
    text-align: center;
  }
`;

const StyledTextRow = styled(Row)`
  width: 45%;

  @media (max-width: 1100px) {
    width: 100%;
    justify-content: center;
    margin: 0 auto;
    text-align: center;
  }
`;

function Item({ title, text, icon }) {
  return (
    <Div>
      <Column width="85%" alignitems="center" textalign="center">
        <Icon className={icon} />
        <Subtitle primary>{title}</Subtitle>
        <Text secondary>{text}</Text>
      </Column>
    </Div>
  );
}

export default function Services() {
  const items = [
    {
      title: "Video Marketing",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
      icon: "fas fa-video"
    },
    {
      title: "Web Design",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
      icon: "fas fa-code"
    },
    {
      title: "Graphic Design",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
      icon: "fas fa-drafting-compass"
    },
    {
      title: "Photography",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
      icon: "fas fa-camera-alt"
    }
  ];
  return (
    <Wrapper>
      <StyledRow>
        <StyledTextRow>
          <Title>Experts in solving problems</Title>
        </StyledTextRow>
        <StyledTextRow>
          <Text secondary>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo.
          </Text>
        </StyledTextRow>
      </StyledRow>
      <Grid>
        {items.map((key, index) => {
          return (
            <Item
              key={index}
              title={key.title}
              text={key.text}
              icon={key.icon}
            />
          );
        })}
      </Grid>
    </Wrapper>
  );
}
