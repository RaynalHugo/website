import React from "react";
import { map, size } from "lodash/fp";

import { SingleStep } from "./single-step";

const mapUncapped = map.convert({ cap: false });

export const Steps = ({
  axis = "horizontal",
  height,
  width,
  steps = [
    { text: "short" },
    { text: "this is medium" },
    { text: "This is very long text, like very very very very long text" }
  ]
}) => {
  const numberOfSteps = size(steps);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: axis === "horizontal" ? "row" : "column",
        alignItems: "flex-start",
        height,
        width
      }}>
      {mapUncapped(
        (step, index) => (
          <SingleStep
            key={step.text}
            text={step.text}
            axis={axis}
            first={index === 0}
            last={index === numberOfSteps - 1}
          />
        ),
        steps
      )}
    </div>
  );
};
