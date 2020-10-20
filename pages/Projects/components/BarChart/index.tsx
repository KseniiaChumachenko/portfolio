import React from "react";
import { Popup } from "semantic-ui-react";

interface P {
  items: {
    label: string;
    value: number;
    backgroundColor: string;
  }[];
  legend?: boolean;
}

export function BarChart({ items, legend = true }: P) {
  const arrWithValues = items.map((i) => i.value);
  const totalCount = arrWithValues.reduce((a, b) => a + b, 0);
  const arrWithValuesAsPercents = arrWithValues.map((v) =>
    ((v * 100) / totalCount).toFixed(1)
  );

  return (
    <div>
      <div
        style={{
          width: "100%",
          borderRadius: 8,
          overflow: "hidden",
          height: 10,
          display: "flex",
        }}
      >
        {items.map((i, index) => (
          <Popup
            key={index}
            content={i.label + " " + arrWithValuesAsPercents[index] + "%"}
            trigger={
              <div
                key={index}
                style={{
                  width: String(arrWithValuesAsPercents[index] + "%"),
                  backgroundColor: i.backgroundColor,
                  height: "100%",
                }}
              />
            }
          />
        ))}
      </div>
      {legend && (
        <div style={{ display: "flex", marginTop: 4, flexWrap: "wrap" }}>
          {items.map((i, index) => (
            <div
              key={index}
              style={{
                marginRight: 16,
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  backgroundColor: i.backgroundColor,
                  borderRadius: "100%",
                  marginRight: 8,
                  width: 8,
                  height: 8,
                }}
              />
              <span style={{ marginRight: 4 }}>{i.label}</span>
              <span>{arrWithValuesAsPercents[index] + "%"}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
