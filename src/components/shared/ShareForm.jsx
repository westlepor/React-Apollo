import React, { Component } from "react";
import styled from "styled-components";
import { Title, Text, Button, Column } from "../../theme";
import { Formik } from "formik";

const Wrapper = styled.div`
  width: 380px;
  height: 388px;
  border-radius: 4px;
  background-color: #ffffff;
`;

const StyledColumn = styled(Column)`
  width: 90%;
  margin: 0 auto;
`;

const Input = styled.input`
  width: 90%;
  height: 50px;
  padding: 0 1em;
  border-radius: 2px;
  border: solid 1px #d5dce0;
  background-color: #ffffff;
  margin: 0.75em 0;
  outline: none;
  transition: 250ms;
  &:focus {
    border: solid 1px #d21f04;
  }
`;

const StyledText = styled(Text)`
  font-family: Ubuntu;
  font-size: 16px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.38;
  letter-spacing: normal;
  color: #000000;
  margin-top: 2em;
`;

export default class ShareForm extends Component {
  render() {
    return (
      <Wrapper>
        <StyledColumn>
          <StyledText>
            Four FREE VIDEOS That Will Help You Transform The Way You Tell Your
            Brand Stories
          </StyledText>
          <Text red>Sign up now</Text>
          <Formik
            initialValues={{
              firstname: "",

              email: ""
            }}
            onSubmit={values => {
              function formv3() {
                let xhr = new XMLHttpRequest();
                let url =
                  "https://api.hsforms.com/submissions/v3/integration/submit/5644251/b20fbe1a-8a15-45f7-bfa0-f3262992a250";
                let data = {
                  fields: [
                    {
                      name: "email",
                      value: values.email
                    },
                    {
                      name: "firstname",
                      value: values.firstname
                    },
                    {
                      name: "lastname",
                      value: values.lastname
                    },
                    {
                      name: "message",
                      value: values.message
                    }
                  ],
                  context: {
                    pageUri: "www.creative114.com/#/",
                    pageName: "Contact page"
                  }
                };
                const final_data = JSON.stringify(data);
                xhr.open("POST", url);
                xhr.setRequestHeader("Content-type", "application/json");
                xhr.onreadystatechange = function() {
                  if (xhr.readyState === 4 && xhr.status === 200) {
                    window.location.href = "https://creative114.com/#/thanks";
                  }
                };
                xhr.send(final_data);
              }
              formv3();
            }}
            render={({ values, handleSubmit, handleChange, handleBlur }) => (
              <form onSubmit={handleSubmit}>
                <Input
                  value={values.firstname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="name"
                  name="firstname"
                  placeholder="First name"
                />
                <Input
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="email"
                  name="email"
                  placeholder="Email"
                />
                <Button primary type="submit">
                  Get the videos
                </Button>
              </form>
            )}
          />
        </StyledColumn>
      </Wrapper>
    );
  }
}
