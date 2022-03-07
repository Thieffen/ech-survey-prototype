import { RadioGroup } from "@headlessui/react";
import { AppContextType, Gender } from "~/root";
import { useOutletContext } from "remix";

const memoryOptions = [
  { name: "she / her / her", value: "F" },
  { name: "he / him / his", value: "M" },
  { name: "they / them / their", value: "NB" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function GenderSelector() {
  const { gender, genderHandler } = useOutletContext<AppContextType>();

  const update = (value: Gender) => {
    genderHandler(value);
  };

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between">
        <h2 className="text-base font-medium text-gray-900 underline">
          Which pronouns do you prefer to be used when people speak about you?
        </h2>
      </div>

      <RadioGroup value={gender} onChange={update} className="mt-6 lg:w-2/3">
        <RadioGroup.Label className="sr-only">
          Choose the pronouns you prefer
        </RadioGroup.Label>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {memoryOptions.map((option) => (
            <RadioGroup.Option
              key={option.value}
              value={option.value}
              className={({ active, checked }) =>
                classNames(
                  "cursor-pointer focus:outline-none",
                  active ? "ring-2 ring-indigo-500 ring-offset-2" : "",
                  checked
                    ? "border-transparent bg-indigo-600 text-white hover:bg-indigo-700"
                    : "border-gray-200 bg-white text-gray-900 hover:bg-gray-50",
                  "flex items-center justify-center rounded-md border py-3 px-3 text-sm font-medium uppercase sm:flex-1"
                )
              }
            >
              <RadioGroup.Label as="p">{option.name}</RadioGroup.Label>
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
}
