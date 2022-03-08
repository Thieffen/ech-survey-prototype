type Props = {
  className: string;
  step1: "complete" | "current" | "upcoming";
  step2: "complete" | "current" | "upcoming";
  step3: "complete" | "current" | "upcoming";
};

export default function Steps({ className = "", step1, step2, step3 }: Props) {
  const steps = [
    { id: "Step 1", name: "Introduction", status: step1 },
    { id: "Step 2", name: "Questionnaire", status: step2 },
    { id: "Step 3", name: "Results", status: step3 },
  ];

  return (
    <nav className={className} aria-label="Progress">
      <ol role="list" className="flex space-y-4 space-y-0 space-x-8">
        {steps.map((step) => (
          <li key={step.name} className="md:flex-1">
            {step.status === "complete" ? (
              <div className="group flex flex-col border-l-4 border-indigo-600 py-2 pl-4 pr-4 md:border-l-0 md:border-t-4 md:pl-4 md:pt-4 md:pb-2">
                <span className="text-xs font-semibold uppercase tracking-wide text-indigo-600">
                  {step.id}
                </span>
                <span className="text-sm font-medium">{step.name}</span>
              </div>
            ) : step.status === "current" ? (
              <a
                href={step.href}
                className="flex flex-col border-l-4 border-indigo-600 bg-indigo-100 py-2 pl-4 pr-4 md:border-l-0 md:border-t-4 md:pl-4 md:pt-4 md:pb-2"
                aria-current="step"
              >
                <span className="text-xs font-semibold uppercase tracking-wide text-indigo-600">
                  {step.id}
                </span>
                <span className="text-sm font-medium">{step.name}</span>
              </a>
            ) : (
              <a
                href={step.href}
                className="group flex flex-col border-l-4 border-gray-200 py-2 pl-4 pr-4 md:border-l-0 md:border-t-4 md:pl-4 md:pt-4 md:pb-2"
              >
                <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                  {step.id}
                </span>
                <span className="text-sm font-medium">{step.name}</span>
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
