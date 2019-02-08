import React from "react";

export const Text = ({ children, color = "#5577ee" }) => {
  return (
    <div
      style={{
        color: color,
        display: "flex",
        justifyContent: "center",
        margin: "1em",
        // maxWidth: "100%",
        flexWrap: "wrap"
      }}
    >
      {children}
    </div>
  );
};
