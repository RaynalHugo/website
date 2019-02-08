import React from "react";

export const Bullet = ({ diameter = 50, color = "#ee7755" }) => {
  return (
    <div
      style={{
        height: diameter,
        width: diameter,
        borderRadius: diameter,
        backgroundColor: color,
        color: "#FFFFFF",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexShrink: 0,
        flexGrow: 0
      }}
    >
      Bullet
    </div>
  );
};
