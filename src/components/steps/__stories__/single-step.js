import { storiesOf } from "@storybook/react";
import React from "react";

import { SingleStep } from "../single-step";

storiesOf("SingleStep", module)
  .add("basic", () => <SingleStep />)
  .add("basic first", () => <SingleStep first />)
  .add("basic last", () => <SingleStep last />)
  .add("vertical", () => (
    <div style={{ height: "200px" }}>
      <SingleStep axis={"vertical"} />
    </div>
  ))
  .add("vertical first", () => (
    <div style={{ height: "200px" }}>
      <SingleStep axis={"vertical"} first />
    </div>
  ))
  .add("vertical last", () => (
    <div style={{ height: "200px" }}>
      <SingleStep axis={"vertical"} last />
    </div>
  ));
