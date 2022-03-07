import classNames from "classnames";

const options = [
  { id: "r0", title: "Not like me at all" },
  { id: "r1", title: "Not like me" },
  { id: "r2", title: "A little like me" },
  { id: "r3", title: "Somewhat like me" },
  { id: "r4", title: "Like me" },
  { id: "decline", title: "I prefer not to answer" },
];

export default function GenericQuestionSelector({ title }) {
  return (
    <div className="py-4 ">
      <label className="text-base font-medium text-gray-500">{title}</label>
      <fieldset className="mt-4">
        <legend className="sr-only">option</legend>
        <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
          {options.map((option) => (
            <div key={option.id} className="flex items-center">
              <input
                id={option.id}
                name="notification-method"
                type="radio"
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label
                htmlFor={option.id}
                className={classNames(
                  "ml-3 block text-sm font-medium ",
                  option.id === "decline" ? "text-yellow-500" : "text-gray-700"
                )}
              >
                {option.title}
              </label>
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  );
}
