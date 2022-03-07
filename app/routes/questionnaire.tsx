import { useNavigate, useOutletContext } from "remix";
import ButtonSecondary from "~/components/layout/ButtonSecondary";
import ButtonPrimary from "~/components/layout/ButtonPrimary";
import Steps from "~/components/layout/Steps";
import GenderSelector from "~/components/questionnaire/GenderSelector";
import GenericQuestionSelector from "~/components/questionnaire/GenericQuestionSelector";

import type { AppContextType, Gender } from "~/root";

function genderify(word: string, gender: Gender, lowercase: boolean = true) {
  const genderMatrix = {
    F: ["She", "Her", "Her"],
    M: ["He", "him", "His"],
    NB: ["They", "Them", "Their"],
  };

  switch (word) {
    case "he":
      return lowercase
        ? genderMatrix[gender][0].toLowerCase()
        : genderMatrix[gender][0];
    case "him":
      return lowercase
        ? genderMatrix[gender][1].toLowerCase()
        : genderMatrix[gender][1];
    case "his":
      return lowercase
        ? genderMatrix[gender][2].toLowerCase()
        : genderMatrix[gender][2];
    default:
      return gender !== "NB" ? word + "s" : word;
  }
}

export default function QuestionnaireRoute() {
  let navigate = useNavigate();

  const { gender, questionnaire } = useOutletContext<AppContextType>();

  // prettier-ignore
  const questions = gender ?
    [
      {id: 'Q01', title: `Thinking up new ideas and being creative is important to ${genderify("him", gender)}. ${genderify("he", gender, false)} ${genderify("like", gender)} to do things in ${genderify("his", gender)} own original way.`,},
      {id: 'Q02', title: `It is important to ${genderify("him", gender)} to be rich. ${genderify("he", gender, false)} wants to have a lot of money and expensive things.`,},
      {id: 'Q03', title: `${genderify('he', gender, false)} ${genderify('think', gender)} it is important that every person in the world should be treated equally. ${genderify('he', gender, false)} ${genderify('believe', gender)} everyone should have equal opportunities in life.`},
    ] : [];

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
            {questions.map((question) => (
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
        {gender && (
          <ButtonPrimary
            label="View results"
            onClick={() => navigate("/results")}
          />
        )}
      </div>
    </>
  );
}
