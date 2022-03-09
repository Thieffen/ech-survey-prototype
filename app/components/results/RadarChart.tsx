// @ts-ignore
import Radar from "react-d3-radar";
import { SchwartzValuesUE } from "~/utils/schwartz";
import { scaleLinear } from "d3-scale";

export default function RadarChart({ results }) {
  //prettier-ignore
  const scale = scaleLinear()
    .domain([-2, 2])
    .range([0, 100]);

  const map = new Map();
  SchwartzValuesUE.forEach((sv) => map.set(sv.key, sv.value));
  console.log("Schwarz EU", SchwartzValuesUE);
  console.log("Schwarz EU map", map);

  const mapUser = new Map();
  results.forEach((sv) => mapUser.set(sv.key, sv.value));
  console.log("User", results);
  console.log("User map", mapUser);

  const EUValues = Object.fromEntries(map);
  const UserValues = Object.fromEntries(mapUser);

  console.log("EUValues", EUValues);

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
            values: EUValues,
          },
          {
            key: "user",
            label: "Your results",
            values: UserValues,
          },
        ],
      }}
    />
  );
}
