import React, { useState } from "react";

import { Bullet } from "./bullet";
import { Line } from "./line";
import { Text } from "./text";

export const SingleStep = ({
  axis = "horizontal",
  text = "TEXT",
  first = false,
  last = false
}) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: axis === "horizontal" ? "column" : "row",
        alignItems: "center",
        justifyContent: "flex-start"
      }}
    >
      <div
        style={{
          width: axis === "horizontal" ? "100%" : "fit-content",
          height: axis === "horizontal" ? "fit-content" : "100%",
          display: "flex",
          flexDirection: axis === "horizontal" ? "row" : "column",
          alignItems: "center"
        }}
      >
        <Line axis={axis} hidden={first} />
        <Bullet />
        <Line axis={axis} hidden={last} />
      </div>
      <Text>{text}</Text>
    </div>
  );
};
