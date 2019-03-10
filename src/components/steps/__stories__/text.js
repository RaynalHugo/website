import { storiesOf } from "@storybook/react";
import React from "react";

import { Text } from "../text";

storiesOf("Steps/Text", module).add("basic", () => <Text>Bonjour</Text>);
