import { useNavigate, useOutletContext } from "remix";
import ButtonSecondary from "~/components/layout/ButtonSecondary";
import ButtonPrimary from "~/components/layout/ButtonPrimary";
import Steps from "~/components/layout/Steps";
import GenderSelector from "~/components/questionnaire/GenderSelector";
import GenericQuestionSelector from "~/components/questionnaire/GenericQuestionSelector";

import type { AppContextType } from "~/root";
import { questions } from "~/utils/questions";

export default function QuestionnaireRoute() {
  let navigate = useNavigate();

  const { gender, questionnaire } = useOutletContext<AppContextType>();

  return (
    <>
      <div className="ecl-u-bg-red-100 mb-6 border text-white">
        <pre>
          gender: {gender}
          <br />
          questionnaire: {JSON.stringify(questionnaire)}
        </pre>
      </div>
      <Steps
        className="mb-6"
        step1="complete"
        step2="current"
        step3="upcoming"
      />
      <section className="prose mb-6">
        <h2>Questionnaire</h2>
      </section>
      <section className="mb-12">
        <GenderSelector />
      </section>

      {gender && (
        <section>
          <h2 className="mb-6 text-base font-medium text-gray-900 underline">
            Now, we will briefly describe some people. Please read each
            description and tell us how much each person is or is not like you.
          </h2>
          <div className="divide-y">
            {questions(gender).map((question) => (
              <GenericQuestionSelector
                key={question.id}
                id={question.id}
                title={question.title}
              />
            ))}
          </div>
        </section>
      )}

      <div className="flex space-x-2 border-t pt-5">
        <ButtonSecondary label="Back" onClick={() => navigate("/")} />
        {gender &&
          Object.keys(questionnaire).length === questions(gender).length && (
            <ButtonPrimary
              label="View results"
              onClick={() => navigate("/results")}
              className=""
            />
          )}
      </div>
    </>
  );
}
