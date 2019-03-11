import React from "react";
import styled from "@emotion/styled";

import { Card } from "./atoms/card";
import { MarkupP, MarkupH1, MarkupSpan } from "./molecules/markup-text";

import { Grey, Cyan, Red } from "../style/colors";

const Body = styled("div")({
  position: "absolute",
  top: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: Grey[100],
  boxSizing: "border-box",
  padding: "1em"
});

export const Home = props => {
  return (
    <Body>
      <MarkupH1
        codeProps={{ color: Cyan["400"], backgroundColor: Cyan[50] }}
        color={Grey[900]}>
        Oh, a visitor! Hello there.
      </MarkupH1>

      <MarkupP
        color={Grey[800]}
        codeProps={{ color: Cyan["400"], backgroundColor: Cyan[50] }}>
        How did you end up here? Since you are here, I will talk about me.
      </MarkupP>

      <MarkupP
        color={Grey[800]}
        codeProps={{ color: Cyan["400"], backgroundColor: Cyan[50] }}>
        I lied, this website is still
        <MarkupSpan
          style={{ fontWeight: 800, color: Red[600] }}
          color={Grey[800]}
          codeProps={{ color: Red["400"], backgroundColor: Red[50] }}>
          under construction
        </MarkupSpan>
        , sorry.
      </MarkupP>
    </Body>
  );
};
