import { storiesOf } from "@storybook/react";
import React from "react";

import { Bullet } from "../bullet";

storiesOf("Bullet", module)
  .add("basic", () => <Bullet />)
  .add("small", () => <Bullet diameter={20} />)
  .add("big", () => <Bullet diameter={200} />)
  .add("colored", () => <Bullet color={"#5577ee"} />);
