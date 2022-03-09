export const SchwartzValuesUE = [
  { key: "universalism", label: "universalism", value: 0.63345 },
  { key: "benevolence", label: "benevolence", value: 0.775131 },
  { key: "tradition", label: "tradition", value: 0.143017 },
  { key: "conformity", label: "conformity", value: -0.2164 },
  { key: "security", label: "security", value: 0.441064 },
  { key: "power", label: "power", value: -0.97554 },
  { key: "achievement", label: "achievement", value: -0.02537 },
  { key: "hedonism", label: "hedonism", value: -0.21825 },
  { key: "stimulation", label: "stimulation", value: -0.76438 },
  { key: "self_direction", label: "self direction", value: 0.353143 },
];

export const compute = (questionnaire) => {
  console.log(questionnaire);
  // COMPUTE mrat = MEAN(v1 to v21)
  const mrat = parseFloat(
    Object.values(questionnaire).reduce((acc, v, i, a) => acc + v / a.length, 0)
  ).toFixed(5);

  console.log("mrat:", mrat);

  // SECURITY (impsafe, ipstrgv)
  // COMPUTE SEcenter = MEAN(v5, v14) - mrat
  // prettier-ignore
  const SEcenter = (((parseInt(questionnaire["impsafe"]) + parseInt(questionnaire["ipstrgv"])) / 2) - mrat).toFixed(5);

  // COMPUTE COcenter = MEAN(v7, v16) - mrat .
  // prettier-ignore
  const COcenter = ((parseInt(questionnaire["ipfrule"]) + parseInt(questionnaire["ipbhprp"])) / 2 - mrat).toFixed(5);

  // TRADITION
  // COMPUTE TRcenter = MEAN(v9, v20) - mrat .
  // prettier-ignore
  const TRcenter = ((parseInt(questionnaire["ipmodst"]) + parseInt(questionnaire["imptrad"])) / 2 - mrat).toFixed(5);

  // BENEVOLENCE
  // COMPUTE BEcenter = MEAN(v12, v18) - mrat.
  // prettier-ignore
  const BEcenter = ((parseInt(questionnaire["iphlppl"]) + parseInt(questionnaire["iplylfr"])) / 2 - mrat).toFixed(5);

  // UNIVERSALITY
  // COMPUTE UNcenter = MEAN(v3, v8, v19) - mrat .
  // prettier-ignore
  const UNcenter = ((parseInt(questionnaire["ipeqopt"]) + parseInt(questionnaire["iplylfr"])  + parseInt(questionnaire["impenv"])) / 3 - mrat).toFixed(5);

  // SELF-DIRECTION
  // COMPUTE SDcenter = MEAN(v1, v11) - mrat .
  // prettier-ignore
  const SDcenter = ((parseInt(questionnaire["ipcrtiv"]) + parseInt(questionnaire["impfree"])) / 2 - mrat).toFixed(5);

  // STIMULATION
  // COMPUTE STcenter = MEAN(v6, v15) - mrat .
  // prettier-ignore
  const STcenter = ((parseInt(questionnaire["impdiff"]) + parseInt(questionnaire["ipadvnt"])) / 2 - mrat).toFixed(5);

  // HEDONISM
  // COMPUTE HEcenter = MEAN(v10, v21) - mrat.
  // prettier-ignore
  const HEcenter = ((parseInt(questionnaire["ipgdtim"]) + parseInt(questionnaire["impfun"])) / 2 - mrat).toFixed(5);

  // COMPUTE ACcenter = MEAN(v4, v13) - mrat .
  // prettier-ignore
  const ACcenter = ((parseInt(questionnaire["ipshabt"]) + parseInt(questionnaire["ipsuces"])) / 2 - mrat).toFixed(5);

  // POWER
  // COMPUTE POcenter = MEAN(v2, v17) - mrat .
  // prettier-ignore
  const POcenter = ((parseInt(questionnaire["imprich"]) + parseInt(questionnaire["iprspot"])) / 2 - mrat).toFixed(5);

  const res = [
    { key: "universalism", label: "universalism", value: UNcenter },
    { key: "benevolence", label: "benevolence", value: BEcenter },
    { key: "tradition", label: "tradition", value: TRcenter },
    { key: "conformity", label: "conformity", value: COcenter },
    { key: "security", label: "security", value: SEcenter },
    { key: "power", label: "power", value: POcenter },
    { key: "achievement", label: "achievement", value: ACcenter },
    { key: "hedonism", label: "hedonism", value: HEcenter },
    { key: "stimulation", label: "stimulation", value: STcenter },
    { key: "self_direction", label: "self direction", value: SDcenter },
  ];

  console.log("res", res);

  return res;
};
