import styled from "@emotion/styled";
import { Grey } from "../../../style/colors";

export const Code = styled(`code`)(
  ({ color = Grey[600], backgroundColor = Grey[100], style }) => ({
    color: color,
    borderRadius: "0.2em",
    backgroundColor: backgroundColor,
    padding: "0.2em",
    margin: "0.1em",
    boxSizing: "border-box",
    width: "fit-content",
    fontSize: "0.8em",
    ...style
  })
);
