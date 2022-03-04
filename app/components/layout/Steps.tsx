type Props = {
  className: string;
  step1: "complete" | "current" | "upcoming";
  step2: "complete" | "current" | "upcoming";
  step3: "complete" | "current" | "upcoming";
};

export default function Steps({ className = "", step1, step2, step3 }: Props) {
  const steps = [
    { id: "Step 1", name: "Introduction", href: "#", status: step1 },
    { id: "Step 2", name: "Questionnaire", href: "#", status: step2 },
    { id: "Step 3", name: "Results", href: "#", status: step3 },
  ];

  return (
    <nav className={className} aria-label="Progress">
      <ol role="list" className="space-y-4 md:flex md:space-y-0 md:space-x-8">
        {steps.map((step) => (
          <li key={step.name} className="md:flex-1">
            {step.status === "complete" ? (
              <a
                href={step.href}
                className="group flex flex-col border-l-4 border-indigo-600 py-2 pl-4 hover:border-indigo-800 md:border-l-0 md:border-t-4 md:pl-0 md:pt-4 md:pb-0"
              >
                <span className="text-xs font-semibold uppercase tracking-wide text-indigo-600 group-hover:text-indigo-800">
                  {step.id}
                </span>
                <span className="text-sm font-medium">{step.name}</span>
              </a>
            ) : step.status === "current" ? (
              <a
                href={step.href}
                className="flex flex-col border-l-4 border-indigo-600 py-2 pl-4 md:border-l-0 md:border-t-4 md:pl-0 md:pt-4 md:pb-0"
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
                className="group flex flex-col border-l-4 border-gray-200 py-2 pl-4 hover:border-gray-300 md:border-l-0 md:border-t-4 md:pl-0 md:pt-4 md:pb-0"
              >
                <span className="text-xs font-semibold uppercase tracking-wide text-gray-500 group-hover:text-gray-700">
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
