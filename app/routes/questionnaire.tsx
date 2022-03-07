import { useNavigate } from "remix";
import ButtonSecondary from "~/components/layout/ButtonSecondary";
import ButtonPrimary from "~/components/layout/ButtonPrimary";
import Steps from "~/components/layout/Steps";
import GenderSelector from "~/components/questionnaire/GenderSelector";
import GenericQuestionSelector from "~/components/questionnaire/GenericQuestionSelector";
import { useState } from "react";

export default function Questionnaire() {
  let navigate = useNavigate();

  const [gender, setGender] = useState(null);
  const genderHandler = (gender: "she" | "he" | "they" | null) => {
    setGender(gender);
  };

  return (
    <>
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
      <section>
        <h2 className="mb-6 text-base font-medium text-gray-900 underline">
          Now, we will briefly describe some people. Please read each
          description and tell us how much each person is or is not like you.
        </h2>
        <div className="divide-y">
          <GenericQuestionSelector title="1/ Thinking up new ideas and being creative is important to her. She likes to do things in her own original way." />
          <GenericQuestionSelector title="2/ It is important to her to be rich. She wants to have a lot of money and expensive things." />
          <GenericQuestionSelector title="3/ She thinks it is important that every person in the world should be treated equally. She believes everyone should have equal opportunities in life." />
        </div>
      </section>
      <div className="flex space-x-2 border-t pt-5">
        <ButtonSecondary label="Back" onClick={() => navigate("/")} />
        <ButtonPrimary
          label="View results"
          onClick={() => navigate("/results")}
        />
      </div>
    </>
  );
}
