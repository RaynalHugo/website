import { storiesOf } from "@storybook/react";
import React from "react";

import { Card } from "..";

storiesOf("Atoms/Card", module)
  .add("basic", () => <Card>Test</Card>)
  .add("colors", () => (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Card color="#000000">#000000</Card>
      <Card color="#353535">#353535</Card>
      <Card color="#ff3535">#ff3535</Card>
      <Card color="#ff7070">#ff7070</Card>
      <Card color="#35ff35">#35ff35</Card>
      <Card color="#70ff70">#70ff70</Card>
      <Card color="#3535ff">#3535ff</Card>
      <Card color="#7070ff">#7070ff</Card>
    </div>
  ));
