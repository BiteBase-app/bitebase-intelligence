
import { CheckIcon } from "lucide-react";

interface Step {
  id: string;
  name: string;
}

interface SetupProgressStepsProps {
  steps: Step[];
  currentStep: number;
}

const SetupProgressSteps = ({ steps, currentStep }: SetupProgressStepsProps) => {
  return (
    <div className="relative mb-8">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full h-0.5 bg-muted" />
      </div>
      <ol className="relative flex justify-between text-sm">
        {steps.map((step, index) => (
          <li key={step.id} className="flex items-center">
            <div
              className={`relative flex h-8 w-8 items-center justify-center rounded-full border text-center ${
                index <= currentStep
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-muted bg-background text-muted-foreground"
              }`}
            >
              {index < currentStep ? (
                <CheckIcon className="h-4 w-4" />
              ) : (
                <span>{index + 1}</span>
              )}
            </div>
            <span
              className={`absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs ${
                index <= currentStep ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {step.name}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default SetupProgressSteps;
