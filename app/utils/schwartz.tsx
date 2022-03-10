export const SchwartzValuesUE = [
  { key: "self_direction", label: "self direction", value: 0.353143 },
  { key: "stimulation", label: "stimulation", value: -0.76438 },
  { key: "hedonism", label: "hedonism", value: -0.21825 },
  { key: "achievement", label: "achievement", value: -0.02537 },
  { key: "power", label: "power", value: -0.97554 },
  { key: "security", label: "security", value: 0.441064 },
  { key: "conformity", label: "conformity", value: -0.2164 },
  { key: "tradition", label: "tradition", value: 0.143017 },
  { key: "benevolence", label: "benevolence", value: 0.775131 },
  { key: "universalism", label: "universalism", value: 0.63345 },
];

export const compute = (questionnaire: { string: number }) => {
  // COMPUTE mrat = MEAN(v1 to v21)
  // prettier-ignore
  const mrat: number = Object
    .values(questionnaire)
    .reduce((acc, v, i, a) => acc + v / a.length, 0);

  const impsafe = questionnaire["impsafe"];
  const ipstrgv = questionnaire["ipstrgv"];
  const ipfrule = questionnaire["ipfrule"];
  const ipbhprp = questionnaire["ipbhprp"];
  const ipmodst = questionnaire["ipmodst"];
  const imptrad = questionnaire["imptrad"];
  const iphlppl = questionnaire["iphlppl"];
  const iplylfr = questionnaire["iplylfr"];
  const ipeqopt = questionnaire["ipeqopt"];
  const ipudrst = questionnaire["ipudrst"];
  const impenv = questionnaire["impenv"];
  const ipcrtiv = questionnaire["ipcrtiv"];
  const impfree = questionnaire["impfree"];
  const impdiff = questionnaire["impdiff"];
  const ipadvnt = questionnaire["impdiff"];
  const ipgdtim = questionnaire["ipgdtim"];
  const impfun = questionnaire["impfun"];
  const ipshabt = questionnaire["ipshabt"];
  const ipsuces = questionnaire["ipsuces"];
  const imprich = questionnaire["imprich"];
  const iprspot = questionnaire["iprspot"];

  if (
    impsafe === undefined ||
    ipstrgv === undefined ||
    ipfrule === undefined ||
    ipbhprp === undefined ||
    ipmodst === undefined ||
    imptrad === undefined ||
    iphlppl === undefined ||
    iplylfr === undefined ||
    ipeqopt === undefined ||
    ipudrst === undefined ||
    impenv === undefined ||
    ipcrtiv === undefined ||
    impfree === undefined ||
    impdiff === undefined ||
    ipadvnt === undefined ||
    ipgdtim === undefined ||
    impfun === undefined ||
    ipshabt === undefined ||
    ipsuces === undefined ||
    imprich === undefined ||
    iprspot === undefined
  ) {
    throw new Error(
      "One of the questionnaire values has not been properly initialized"
    );
  }

  const SEcenter = (impsafe + ipstrgv) / 2 - mrat; // SECURITY
  const COcenter = (ipfrule + ipbhprp) / 2 - mrat; // CONFORMITY
  const TRcenter = (ipmodst + imptrad) / 2 - mrat; // TRADITION
  const BEcenter = (iphlppl + iplylfr) / 2 - mrat; // BENEVOLENCE
  const UNcenter = (ipeqopt + ipudrst + impenv) / 3 - mrat; // UNIVERSALITY
  const SDcenter = (ipcrtiv + impfree) / 2 - mrat; // SELF-DIRECTION
  const STcenter = (impdiff + ipadvnt) / 2 - mrat; // STIMULATION
  const HEcenter = (ipgdtim + impfun) / 2 - mrat; // HEDONISM
  const ACcenter = (ipshabt + ipsuces) / 2 - mrat; // ACHIEVEMENT
  const POcenter = (imprich + iprspot) / 2 - mrat; // POWER

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

  return res;
};
