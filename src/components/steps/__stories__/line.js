import { storiesOf } from "@storybook/react";
import React from "react";

import { Line } from "../line";

storiesOf("Line", module)
  .add("basic", () => <Line />)
  .add("vertical", () => (
    <div style={{ height: 500 }}>
      <Line axis={"vertical"} />
    </div>
  ))
  .add("colored", () => <Line color={"#ee8855"} />);
