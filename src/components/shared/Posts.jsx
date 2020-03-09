import React from "react";
import styled from "styled-components";
import { Column, SpanTitle, Row, Text } from "../../theme/index";
import moment from "moment";
import Video from "../shared/Video";

const Wrapper = styled.div`
  height: 100%;
  width: 85%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em 0;
  @media (max-width: 780px) {
    width: 95%;
    text-align: center;
    padding: 1em 0;
  }
`;

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 2em;
  // display: grid;
  // grid-gap: 50px;
  // grid-template-columns: repeact(1, 1fr);
  // grid-auto-rows: auto;
  height: 100%;
  width: 75%;
  @media (max-width: 780px) {
    width: 95%;
    margin: 0;
  }
`;

const Div = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: 750ms;
  margin-top: 50px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
  &:first-child {
    margin-top: 0px;
  }
`;

const StyledPost = styled(Column)`
  padding: 0 1em;
  @media (max-width: 780px) {
    width: ${props => (props.text ? "95%" : "65%")};
    text-align: center;
    padding: 0;
  }
`;

const StyledColumn = styled(Column)`
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 75%;
  margin: 0 auto;
  @media (max-width: 1100px) {
    margin: 1em auto;
    width: 95%;
  }
`;

function Post({ title, text, date, author, video, description }) {
  return (
    // <Link to={`/impact/${title.toLowerCase()}`}>
    <Div>
      <Video src={video} />
      <StyledPost>
        {/* <Subtitle margin="1em 0 0 0">{title}</Subtitle> */}
        {/* <Text>{text}</Text> */}
        <Row width="100%" justifycontent="space-between">
          {/* <Text margin=".15em 0">{date}</Text> */}
          {/* <Text margin=".15em 0">By: {author}</Text> */}
        </Row>
        {/* <Text post>{description}</Text> */}
      </StyledPost>
    </Div>
    // </Link>
  );
}

export default function Posts({ posts }) {
  return (
    <Wrapper>
      <StyledColumn>
        <SpanTitle>The Stories</SpanTitle>
        <Text logo margin="0">
          That Need to Be Told
        </Text>

        {/* <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor.
        </Text> */}
      </StyledColumn>
      {posts && posts.length >= 1 && (
        <Grid>
          {posts.map((key, index) => {
            return (
              <Post
                key={index}
                title={key.title}
                text={key.text}
                date={moment(key.date).format("MMM Do YY")}
                // author={key.author}
                video={key.video}
              />
            );
          })}
        </Grid>
      )}
      {posts && posts.length === 0 && (
        <Column alignitems="center" textalign="center" jusitfycontent="center">
          <SpanTitle>Coming soon!</SpanTitle>
        </Column>
      )}
    </Wrapper>
  );
}
