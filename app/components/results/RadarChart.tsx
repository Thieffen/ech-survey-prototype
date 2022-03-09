// @ts-ignore
import Radar from "react-d3-radar";

export default function RadarChart({ variables, sets }) {
  return (
    <Radar
      width={500}
      height={500}
      padding={70}
      domainMax={100}
      highlighted={null}
      onHover={(point: any) => {
        if (point) {
          // console.log("hovered over a data point");
        } else {
          // console.log("not over anything");
        }
      }}
      data={{
        variables: variables,
        sets: sets,
      }}
    />
  );
}
