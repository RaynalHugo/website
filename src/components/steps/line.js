import React from "react";

export const Line = ({
  axis = "horizontal",
  color = "#5577ee",
  hidden = false
}) => {
  return (
    <div
      style={{
        visibility: hidden ? "hidden" : "visible",
        height: axis === "horizontal" ? "10px" : "100%",
        width: axis === "horizontal" ? "100%" : "10px",
        // borderRadius: 5,
        backgroundColor: color,
        color: "#FFFFFF",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      Line
    </div>
  );
};
