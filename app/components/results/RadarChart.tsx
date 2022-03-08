// @ts-ignore
import Radar from "react-d3-radar";
import { SchwartzValuesUE } from "~/utils/schwartz";

export default function RadarChart({ results }) {
  const map = new Map();
  SchwartzValuesUE.forEach((sv) => map.set(sv.key, sv.value + 1));

  const mapUser = new Map();
  results.forEach((sv) => map.set(sv.key, sv.value + 1));

  return (
    <Radar
      width={500}
      height={500}
      padding={70}
      domainMax={2}
      highlighted={null}
      onHover={(point: any) => {
        if (point) {
          console.log("hovered over a data point");
        } else {
          console.log("not over anything");
        }
      }}
      data={{
        variables: SchwartzValuesUE,
        sets: [
          {
            key: "eu",
            label: "EU Citizen (average)",
            values: Object.fromEntries(map),
          },
          {
            key: "user",
            label: "Your results",
            values: Object.fromEntries(mapUser),
          },
        ],
      }}
    />
  );
}
