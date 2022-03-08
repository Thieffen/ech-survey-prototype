export default function Debug({ gender, questionnaire }) {
  return (
    <div className="ecl-u-bg-red-100 fixed top-0 mb-6 border text-xs text-white opacity-50">
      <pre>
        gender: {gender}
        <br />
        questionnaire: {JSON.stringify(questionnaire)}
        <br />
        questions answered: {Object.keys(questionnaire).length}
      </pre>
    </div>
  );
}
