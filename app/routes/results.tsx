import { useNavigate, useOutletContext } from "remix";
import ButtonSecondary from "~/components/layout/ButtonSecondary";
import Steps from "~/components/layout/Steps";
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

  // compute EU average citizen Schwartz values
  const mapEU = new Map();
  SchwartzValuesUE.forEach((sv) => mapEU.set(sv.key, sv.value));
  const EUValues = Object.fromEntries(mapEU);

  // compute User Schwartz values
  const mapUser = new Map();
  results.forEach((sv) => mapUser.set(sv.key, sv.value));
  const UserValues = Object.fromEntries(mapUser);

  // find what are the min/max values
  // @ts-ignore
  const allValues: Array<number> = Object.values(EUValues).concat(
    Object.values(UserValues)
  );

  const minValue: number = Math.min(...allValues);
  const maxValue: number = Math.max(...allValues);

  // let's add an offset so that the center of the graph is not the minValue
  const minOffset: number = Math.abs(maxValue - minValue) / 5;

  // rescale values
  //prettier-ignore
  var scale = LinearScale().domain([minValue - minOffset, maxValue]).range([0, 100])

  function scaleValues(p) {
    Object.keys(p).forEach((c) => (p[c] = scale(+p[c])));
  }

  const EUValuesRescaled = Object.assign({}, EUValues);
  const UserValuesRescaled = Object.assign({}, UserValues);
  scaleValues(EUValuesRescaled);
  scaleValues(UserValuesRescaled);

  // format values to be consumed by the RadarChart
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

  // we compute user top and bottom values
  // top values are those above EU average
  // bottom values are those below EU average
  // console.log(UserValues);
  // console.log(EUValues);

  const sortableTopValues = [];
  const sortableTopValuesAbs = [];
  const sortableBottomValues = [];
  const sortableBottomValuesAbs = [];
  for (var cat in UserValues) {
    const label =
      SchwartzValuesUE.filter((e) => e.key === cat)[0]?.label || cat;
    // is it a user top or bottom values?
    if (UserValues[cat] > EUValues[cat]) {
      sortableTopValues.push([label, UserValues[cat]]);
      sortableTopValuesAbs.push([
        label,
        Math.abs(UserValues[cat] - EUValues[cat]),
      ]);
    } else {
      sortableBottomValues.push([label, UserValues[cat]]);
      sortableBottomValuesAbs.push([
        label,
        Math.abs(EUValues[cat] - UserValues[cat]),
      ]);
    }
  }
  sortableTopValues.sort((a, b) => b[1] - a[1]);
  sortableBottomValues.sort((a, b) => b[1] - a[1]);
  // @ts-ignore
  sortableTopValuesAbs.sort((a, b) => b[1] - a[1]);
  // @ts-ignore
  sortableBottomValuesAbs.sort((a, b) => b[1] - a[1]);
  //
  // console.log("sortableTopValues", sortableTopValues);
  // console.log("sortableBottomValues", sortableBottomValues);
  //
  // console.log("sortableTopValuesAbs", sortableTopValuesAbs);
  // console.log("sortableBottomValuesAbs", sortableBottomValuesAbs);

  // @ts-ignore
  return (
    <>
      <Steps
        className="mb-6"
        step1="complete"
        step2="complete"
        step3="current"
      />

      <div className="space-y-6">
        {isCompleted ? (
          <>
            <section className="prose">
              <div className="flex space-x-2">
                <div
                  className="rounded-md border p-2"
                  style={{
                    backgroundColor: "rgb(255, 127, 14, .25)",
                    borderColor: "rgb(255, 127, 14, .7)",
                    color: "rgb(255, 127, 14, 1)",
                  }}
                >
                  You
                </div>
                <div
                  className="rounded-md border p-2"
                  style={{
                    backgroundColor: "rgb(31, 119, 180, .25)",
                    borderColor: "rgb(31, 119, 180, .7)",
                    color: "rgb(31, 119, 180, 1)",
                  }}
                >
                  EU Citizen (average)
                </div>
              </div>

              <RadarChart variables={SchwartzValuesUE} sets={sets} />
            </section>
            <section className="prose">
              <h3>How to read the graph?</h3>
              <p>
                The further out the line for a value, the more important it is
                to you. The yellow line represents you, the blue one an average
                EU citizen.
              </p>
              <p>
                The result for an average EU citizen is calculated using the
                2018 wave of EU countries included in the European Social
                Survey: http://www.europeansocialsurvey.org/.
              </p>
              <p>
                Countries missing in the average: Greece, Luxemburg, Malta,
                Romania.
              </p>
              <p>
                Neighbouring values are usually positively related, e.g. people,
                who strongly endorse Tradition, typically also endorse
                Conformity and Security highly. Values that are on opposing
                sides of the circle are negatively related, e.g. people, who
                strongly endorse Universalism, typically support Power less.
              </p>
            </section>
            <section className="prose">
              <h3>Explaining the values</h3>
              <table>
                <thead>
                  <tr>
                    <th>Value</th>
                    <th>Defining goal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Self-Direction</td>
                    <td>
                      Independent thought and action–choosing, creating,
                      exploring
                    </td>
                  </tr>
                  <tr>
                    <td>Stimulation</td>
                    <td>Excitement, novelty, and challenge in life</td>
                  </tr>
                  <tr>
                    <td>Hedonism</td>
                    <td>Pleasure or sensuous gratification for oneself</td>
                  </tr>
                  <tr>
                    <td>Achievement</td>
                    <td>
                      Personal success through demonstrating competence
                      according to social standards
                    </td>
                  </tr>
                  <tr>
                    <td>Power</td>
                    <td>
                      Social status and prestige, control or dominance over
                      people and resources
                    </td>
                  </tr>
                  <tr>
                    <td>Security</td>
                    <td>
                      Safety, harmony, and stability of society, of
                      relationships, and of sel
                    </td>
                  </tr>
                  <tr>
                    <td>Conformity</td>
                    <td>
                      Restraint of actions, inclinations, and impulses likely to
                      upset or harm others and violate social expectations or
                      norms
                    </td>
                  </tr>
                  <tr>
                    <td>Tradition</td>
                    <td>
                      Respect, commitment, and acceptance of the customs and
                      ideas that one’s culture or religion provides
                    </td>
                  </tr>
                  <tr>
                    <td>Benevolence</td>
                    <td>
                      Preserving and enhancing the welfare of those with whom
                      one is in frequent personal contact (the ‘in-group’)
                    </td>
                  </tr>
                  <tr>
                    <td>Universalism</td>
                    <td>
                      Understanding, appreciation, tolerance, and protection for
                      the welfare of all people and for nature
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>
            <section className="prose">
              <h3>What does it mean?</h3>
              <p>
                Whether your values are close to the average of EU citizens or
                far away from them is neither good nor bad.
              </p>
              <p>
                However, if your values score for a value is higher than the EU
                average, this could mean that you tend to prioritise this value
                more when thinking about societal problems and policy solutions
                to them. On the other hand, if your score for a value is lower
                than the EU average you probably do not think about this value
                as much as an average citizen when analysing societal problems
                and possible policy measures to solve them.
              </p>
              <p>
                Obviously everyone has their own values priority, however if you
                are a policymaker, you might want to make a conscious effort to
                understand citizens' concerns, where you differ from them
                significantly to represent all relevant views present in
                society.
              </p>
            </section>
            <section className="prose">
              <h3>How to read the graph?</h3>
              <p>
                The further out the line for a value, the more important it is
                to you. The yellow line represents you, the blue one an average
                EU citizen.
              </p>
              <p>
                Neighbouring values are usually positively related, e.g. people,
                who strongly endorse Tradition, typically also endorse
                Conformity and Security highly. Values that are on opposing
                sides of the circle are negatively related, e.g. people, who
                strongly endorse Universalism, typically support Power less.
              </p>
              <p>
                (If there are missing data points for “You”, this is because you
                didn’t respond to any of the items relevant for this value.)
              </p>
              <h3>Explaining the values</h3>
              <table>
                <thead>
                  <tr>
                    <th className="w-1/3">Value </th>
                    <th>Defining goal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Self-Direction</td>
                    <td>
                      Independent thought and action–choosing, creating,
                      exploring
                    </td>
                  </tr>
                  <tr>
                    <td>Stimulation</td>
                    <td>Excitement, novelty, and challenge in life</td>
                  </tr>
                  <tr>
                    <td>Hedonism</td>
                    <td>Pleasure or sensuous gratification for oneself</td>
                  </tr>
                  <tr>
                    <td>Achievement</td>
                    <td>
                      Personal success through demonstrating competence
                      according to social standards
                    </td>
                  </tr>
                  <tr>
                    <td>Power</td>
                    <td>
                      Social status and prestige, control or dominance over
                      people and resources
                    </td>
                  </tr>
                  <tr>
                    <td>Security</td>
                    <td>
                      Safety, harmony, and stability of society, of
                      relationships, and of self
                    </td>
                  </tr>
                  <tr>
                    <td>Conformity</td>
                    <td>
                      Restraint of actions, inclinations, and impulses likely to
                      upset or harm others and violate social expectations or
                      norms
                    </td>
                  </tr>
                  <tr>
                    <td>Tradition</td>
                    <td>
                      Respect, commitment, and acceptance of the customs and
                      ideas that one’s culture or religion provides
                    </td>
                  </tr>
                  <tr>
                    <td>Benevolence</td>
                    <td>
                      Preserving and enhancing the welfare of those with whom
                      one is in frequent personal contact (the ‘in-group’)
                    </td>
                  </tr>
                  <tr>
                    <td>Universalism</td>
                    <td>
                      Understanding, appreciation, tolerance, and protection for
                      the welfare of all people and for
                    </td>
                  </tr>
                </tbody>
              </table>
              <h3>What does this mean?</h3>
              <p>
                Whether your values are close to the average of EU citizens or
                far away from them is neither good nor bad.
              </p>
              <p>
                However, if your values score for a value is higher than the EU
                average, this could mean that you tend to prioritise this value
                more when thinking about societal problems and policy solutions
                to them. On the other hand, if your score for a value is lower
                than the EU average you probably do not think about this value
                as much as an average citizen when analysing societal problems
                and possible policy measures to solve them.
              </p>
              <p>
                Obviously everyone has their own values priority, however if you
                are a policymaker, you might want to make a conscious effort to
                understand citizens' concerns, where you differ from them
                significantly to represent all relevant views present in
                society.
              </p>
              <h3>Your own values priorities and possible blind spots</h3>
              <table>
                <thead>
                  <tr>
                    <th>Own values priorities (above EU average)</th>
                    <th>Potential values blind spots (below EU average)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{sortableTopValuesAbs[0][0]}</td>
                    <td>{sortableBottomValuesAbs[0][0]}</td>
                  </tr>
                  <tr>
                    <td>{sortableTopValuesAbs[1][0]}</td>
                    <td>{sortableBottomValuesAbs[1][0]}</td>
                  </tr>
                </tbody>
              </table>

              <h3>More info</h3>

              <p>
                This values self-assessment tool is part of the research project
                “Values and Identities” of the European Commission’s Joint
                Research Centre. You can find more information, tools and
                publications from this research projects here:
              </p>
              <ul>
                <li>
                  <a
                    href="https://knowledge4policy.ec.europa.eu/projects-activities/values-identities-policymakers-guide_en"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Project website
                  </a>
                </li>
                <li>
                  <a
                    href="https://publications.jrc.ec.europa.eu/repository/handle/JRC126150"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Flagship report "Values and Identities - a policymaker's
                    guide"
                  </a>
                </li>
                <li>
                  <a
                    href="https://ec.europa.eu/eusurvey/runner/VIupdates"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Subscribe to updates from the research project
                  </a>
                </li>
              </ul>

              <h3>Difference between 10 and 19 values model</h3>
              <p>
                In the flagship report available above, we used the 19 values
                model to detail the needs for policymaking in general. In this
                test, you took the short version of the questionnaire that
                assesses only 10 values. These 10 values can be further split
                into more refined categories to bring the total count up to 19
                values. Because we want to compare your answers to that of an
                average EU citizens, we can only use the short version, which is
                asked regularly in Europe by the{" "}
                <a
                  href="https://www.europeansocialsurvey.org/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  European Social Survey
                </a>
                .
              </p>
              {/*<ResultsTable variables={SchwartzValuesUE} sets={sets} />*/}
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
