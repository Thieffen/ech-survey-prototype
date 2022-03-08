// @ts-ignore
import Radar from "react-d3-radar";
import { SchwartzValuesUE } from "~/utils/schwartz";

export default function RadarChart() {
  const map = new Map();
  SchwartzValuesUE.forEach((sv) => map.set(sv.key, sv.value + 1));

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
          // {
          //   key: "user",
          //   label: "You",
          //   values: {
          //     resilience: 10,
          //     strength: 8,
          //     adaptability: 6,
          //     creativity: 4,
          //     openness: 2,
          //     confidence: 0,
          //   },
          // },
        ],
      }}
    />
  );
}
