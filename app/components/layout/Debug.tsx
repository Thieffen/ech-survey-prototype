export default function Debug({
  gender,
  questionnaire,
  questionnaireCompleted,
}) {
  return (
    <div className="ecl-u-bg-red-100 mb-6 border text-white">
      <pre>
        gender: {gender}
        <br />
        questionnaire: {JSON.stringify(questionnaire)}
        <br />
        completed: {JSON.stringify(questionnaireCompleted)}
      </pre>
    </div>
  );
}
