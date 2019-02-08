import { storiesOf } from "@storybook/react";
import React from "react";

import { Text } from "../text";

storiesOf("Text", module).add("basic", () => <Text>Bonjour</Text>);
