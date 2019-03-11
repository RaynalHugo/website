import styled from "@emotion/styled";
import { Grey } from "../../../style/colors";

export const Card = styled(`div`)(
  ({ color = Grey[600], backgroundColor = Grey[50], style }) => ({
    color: color,
    borderRadius: "0.25em",
    backgroundColor: backgroundColor,
    padding: "1em",
    margin: "1em",
    boxSizing: "border-box",
    width: "fit-content",
    height: "fit-content",
    ...style
  })
);
