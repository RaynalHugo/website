import React from "react";
import styled from "@emotion/styled";

import { Code } from "../../atoms/code";
import { Span, P, H1, H2 } from "../../atoms/text";

const SpanWrapper = styled("span")({
  display: "flex",
  flexDirection: "row"
});

const PWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  margin: "1em 0px"
});

const H1Wrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  margin: "0.67em 0px"
});

const H2Wrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  margin: "0.83em 0px"
});

export const MarkupSpan = ({ children, codeProps, style, ...otherProps }) => (
  <SpanWrapper>
    <Code {...codeProps}>{"<span>"}</Code>
    <Span style={{ margin: "auto 0px", ...style }} {...otherProps}>
      {children}
    </Span>
    <Code {...codeProps}>{"</span>"}</Code>
  </SpanWrapper>
);

export const MarkupP = ({ children, codeProps, style, ...otherProps }) => (
  <PWrapper>
    <Code {...codeProps}>{"<p>"}</Code>
    <P
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        ...style
      }}
      {...otherProps}>
      {children}
    </P>
    <Code {...codeProps}>{"</p>"}</Code>
  </PWrapper>
);

export const MarkupH1 = ({ children, codeProps, ...otherProps }) => (
  <H1Wrapper>
    <Code {...codeProps}>{"<h1>"}</Code>
    <H1 {...otherProps}>{children}</H1>
    <Code {...codeProps}>{"</h1>"}</Code>
  </H1Wrapper>
);

export const MarkupH2 = ({ children, codeProps, ...otherProps }) => (
  <H2Wrapper>
    <Code {...codeProps}>{"<h2>"}</Code>
    <H2 {...otherProps}>{children}</H2>
    <Code {...codeProps}>{"</h2>"}</Code>
  </H2Wrapper>
);
