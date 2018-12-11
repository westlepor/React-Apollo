import React from "react";
import styled from "styled-components";
import { Column, Text, Button, Subtitle } from "../../theme/index";

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  min-height: 500px;
  width: 100%;
  align-items: center;
  @media (max-width: 780px) {
    flex-direction: ${props => (props.primary ? "column-reverse" : "column")};
    align-items: center;
    justify-content: center;
  }
`;

const StyledColumn = styled(Column)`
  width: 50vw;
  justify-content: center;
  align-items: center;
  background-color: inherit;
  padding: 2em 0;
  @media (max-width: 780px) {
    width: 100%;
    padding: 4em 0;
    align-items: center;
  }
`;

const StyledTextColumn = styled(Column)`
  margin: 1em 0;
  width: 70%;
  @media (max-width: 780px) {
    width: 90%;
    text-align: center;
  }
`;

const Div = styled.div`
  background: ${props => props.background};
  background-size: cover;
  width: 50vw;
  min-height: 550px;
  @media (max-width: 780px) {
    width: 100%;
    min-height: 400px;
  }
`;

export default function Benefit({ title, description, img, type, navigate }) {
  return (
    <Wrapper primary={type === "primary"}>
      {type === "primary" && (
        <React.Fragment>
          <StyledColumn>
            <StyledTextColumn>
              <Subtitle>{title}</Subtitle>
              <Text>{description}</Text>
              <Button
                primary
                onClick={() =>
                  navigate.push(`/casestudies/${title.toLowerCase()}`)
                }
              >
                Learn more
              </Button>
            </StyledTextColumn>
          </StyledColumn>
          <Div background={`url('${img}')`} />
        </React.Fragment>
      )}
      {type === "secondary" && (
        <React.Fragment>
          <Div background={`url('${img}')`} />
          <StyledColumn>
            <StyledTextColumn>
              <Subtitle>{title}</Subtitle>
              <Text>{description}</Text>
              <Button
                primary
                onClick={() =>
                  navigate.push(`/casestudies/${title.toLowerCase()}`)
                }
              >
                Learn more
              </Button>
            </StyledTextColumn>
          </StyledColumn>
        </React.Fragment>
      )}
    </Wrapper>
  );
}
