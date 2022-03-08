import classNames from "classnames";
import { useOutletContext } from "remix";
import { AppContextType, Gender } from "~/root";

type Props = {
  id: string;
  title: string;
};

const options = [
  { id: "0", title: "Not like me at all" },
  { id: "1", title: "Not like me" },
  { id: "2", title: "A little like me" },
  { id: "3", title: "Somewhat like me" },
  { id: "4", title: "Like me" },
  { id: "N", title: "I prefer not to answer" },
];

export default function GenericQuestionSelector({ id, title }: Props) {
  const { questionnaire, questionnaireHandler } =
    useOutletContext<AppContextType>();

  const update = (questionId: string, answer: string) => {
    questionnaireHandler(questionId, answer.slice(-1));
  };

  return (
    <div className="py-4 ">
      <label className="text-base font-medium text-gray-500">{title}</label>
      <fieldset className="mt-4">
        <legend className="sr-only">option</legend>
        <div className="space-y-4 md:flex md:items-center md:space-y-0 md:space-x-10">
          {options.map((option) => {
            const inputId = [id, option.id].join("-");
            return (
              <div key={option.id} className="flex items-center">
                <input
                  // @ts-ignore
                  checked={questionnaire[id] === option.id}
                  id={inputId}
                  name={id}
                  type="radio"
                  onChange={() => update(id, inputId)}
                  className="h-4 w-4 cursor-pointer border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  htmlFor={inputId}
                  className={classNames(
                    "ml-3 block cursor-pointer text-sm font-medium",
                    option.id === "N" ? "text-yellow-500" : "text-gray-700"
                  )}
                >
                  {option.title}
                </label>
              </div>
            );
          })}
        </div>
      </fieldset>
    </div>
  );
}
