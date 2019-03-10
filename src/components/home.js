import React from "react";

import { Steps } from "./steps";
import { Span, H1 } from "./atoms/text";

export const Home = props => {
  return (
    <div>
      <H1>This is the Home Page</H1>
      <Span>This is a test Span</Span>
      <Steps />
    </div>
  );
};
