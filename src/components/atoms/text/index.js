import styled from "@emotion/styled";

export const Span = styled(`span`)(({ color, style }) => ({
  color: color,
  fontFamily: "roboto",
  ...style
}));

export const P = styled(`p`)(({ color, style }) => ({
  color: color,
  fontFamily: "roboto",
  textIndent: "1em",
  margin: "0px",
  display: "flex",
  flexDirection: "row",
  "& span": {
    textIndent: "0px"
  },
  ...style
}));

export const H1 = styled(`h1`)(({ color, style }) => ({
  color: color,
  fontFamily: "roboto",
  margin: "0px 0px 0px 0.63em",
  ...style
}));

export const H2 = styled(`h2`)(({ color, style }) => ({
  color: color,
  fontFamily: "roboto",
  margin: "0px 0px 0px 0.83em",
  ...style
}));
