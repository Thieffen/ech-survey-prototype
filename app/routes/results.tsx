import { useNavigate, useOutletContext } from "remix";
import ButtonSecondary from "~/components/layout/ButtonSecondary";
import Steps from "~/components/layout/Steps";
import Debug from "~/components/layout/Debug";
import { AppContextType } from "~/root";
import RadarChart from "~/components/results/RadarChart";
import { questions } from "~/utils/questions";
import { compute, SchwartzValuesUE } from "~/utils/schwartz";
import ResultsTable from "~/components/results/ResultsTable";
var LinearScale = require("linear-scale");

export default function Results() {
  let navigate = useNavigate();
  const { gender, questionnaire } = useOutletContext<AppContextType>();

  const isCompleted =
    gender && Object.keys(questionnaire).length === questions(gender).length;

  const results = isCompleted ? compute(questionnaire) : [];

  //prettier-ignore
  var scale = LinearScale().domain([-2, 2]).range([0, 100])

  const map = new Map();
  SchwartzValuesUE.forEach((sv) => map.set(sv.key, sv.value));

  const mapUser = new Map();
  results.forEach((sv) => mapUser.set(sv.key, sv.value));

  const EUValues = Object.fromEntries(map);
  const UserValues = Object.fromEntries(mapUser);

  function scaleValues(p) {
    Object.keys(p).forEach((c) => (p[c] = scale(+p[c])));
  }

  const EUValuesRescaled = Object.assign({}, EUValues);
  const UserValuesRescaled = Object.assign({}, UserValues);
  scaleValues(EUValuesRescaled);
  scaleValues(UserValuesRescaled);

  const sets = [
    {
      key: "eu",
      label: "EU Citizen (average)",
      valuesUnscaled: EUValues,
      values: EUValuesRescaled,
    },
    {
      key: "user",
      label: "Your results",
      valuesUnscaled: UserValues,
      values: UserValuesRescaled,
    },
  ];

  return (
    <>
      <Steps
        className="mb-6"
        step1="complete"
        step2="complete"
        step3="current"
      />

      <div>
        {isCompleted ? (
          <>
            <RadarChart variables={SchwartzValuesUE} sets={sets} />
            <section>
              <ResultsTable variables={SchwartzValuesUE} sets={sets} />
            </section>
          </>
        ) : (
          <p className="font-medium text-red-500">
            Please go back and complete the questionnaire
          </p>
        )}
      </div>

      <div className="flex space-x-2 border-t pt-5">
        <ButtonSecondary
          label="Back"
          onClick={() => navigate("/questionnaire")}
        />
      </div>
    </>
  );
}
