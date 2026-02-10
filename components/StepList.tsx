import { CheckCircle2 } from "lucide-react";

interface StepListProps {
  steps: string[];
}

export function StepList({ steps }: StepListProps) {
  return (
    <div className="space-y-4">
      {steps.map((step, index) => (
        <div
          key={index}
          className="flex gap-4 p-4 bg-white rounded-lg border border-gray-200 
          hover:border-gray-300 hover:shadow-sm transition-all duration-200"
        >
          {/* Step Number */}
          <div className="flex-shrink-0">
            <div
              className="w-10 h-10 rounded-full bg-blue-600 text-white 
              flex items-center justify-center font-bold text-lg"
            >
              {index + 1}
            </div>
          </div>

          {/* Step Content */}
          <div className="flex-1 pt-2">
            <p className="text-gray-700 text-base leading-relaxed">{step}</p>
          </div>

          {/* Completion Icon (visual only) */}
          <div className="flex-shrink-0 pt-2">
            <CheckCircle2 className="w-6 h-6 text-gray-300" />
          </div>
        </div>
      ))}
    </div>
  );
}
