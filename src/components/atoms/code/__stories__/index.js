import { storiesOf } from "@storybook/react";
import React from "react";

import { Code } from "..";

storiesOf("Atoms/Code", module)
  .add("basic", () => <Code>Test</Code>)
  .add("colors", () => (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Code color="#000000">#000000</Code>
      <Code color="#353535">#353535</Code>
      <Code color="#ff3535">#ff3535</Code>
      <Code color="#ff7070">#ff7070</Code>
      <Code color="#35ff35">#35ff35</Code>
      <Code color="#70ff70">#70ff70</Code>
      <Code color="#3535ff">#3535ff</Code>
      <Code color="#7070ff">#7070ff</Code>
    </div>
  ));
