import { useNavigate, useOutletContext } from "remix";
import ButtonSecondary from "~/components/layout/ButtonSecondary";
import Steps from "~/components/layout/Steps";
import Debug from "~/components/layout/Debug";
import { AppContextType } from "~/root";
import RadarChart from "~/components/results/RadarChart";

export default function Results() {
  let navigate = useNavigate();
  const { gender, questionnaire, questionnaireCompleted } =
    useOutletContext<AppContextType>();

  return (
    <>
      <Steps
        className="mb-6"
        step1="complete"
        step2="complete"
        step3="current"
      />

      <section className="prose">
        {questionnaireCompleted ? (
          <RadarChart />
        ) : (
          <p>Please go back and complete the questionnaire</p>
        )}
      </section>

      <div className="flex space-x-2 border-t pt-5">
        <ButtonSecondary
          label="Back"
          onClick={() => navigate("/questionnaire")}
        />
      </div>

      <Debug
        questionnaire={questionnaire}
        gender={gender}
        questionnaireCompleted={questionnaireCompleted}
      />
    </>
  );
}
