import { storiesOf } from "@storybook/react";
import React from "react";

import { Steps } from "..";

storiesOf("Steps", module)
  .add("basic", () => <Steps />)
  .add("vertical", () => (
    <div>
      <Steps axis={"vertical"} height={500} width={200} />
    </div>
  ));
