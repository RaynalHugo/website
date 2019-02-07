import React, { useState } from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Button, Welcome } from "@storybook/react/demo";

const MyComp = () => {
  const [count, setCount] = useState(0);

  return (
    <React.Fragment>
      <div>{`Count: ${count}`}</div>
      <Button
        onClick={() => {
          console.log("new count = ", count + 1);
          setCount(count + 1);
        }}
      >
        <span role="img" aria-label="so cool">
          +1
        </span>
      </Button>
    </React.Fragment>
  );
};

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Button", module)
  .add("with text", () => (
    <Button onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("Count", () => <MyComp />);
