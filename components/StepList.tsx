import { CheckCircle2 } from "lucide-react";

interface StepListProps {
  steps: string[];
}

export function StepList({ steps }: StepListProps) {
  return (
    <div className="space-y-3">
      {steps.map((step, index) => (
        <div
          key={index}
          className="flex gap-4 p-5 bg-white rounded-lg border border-slate-200 
          hover:border-blue-300 hover:shadow-md transition-all duration-200 hover:bg-slate-50"
        >
          {/* Step Number */}
          <div className="shrink-0">
            <div
              className="w-10 h-10 rounded-lg text-white 
              flex items-center justify-center font-bold text-lg shadow-md"
              style={{ backgroundColor: 'var(--accent-blue)' }}
            >
              {index + 1}
            </div>
          </div>

          {/* Step Content */}
          <div className="flex-1 pt-1">
            <p className="text-base leading-relaxed font-sans muted">
              {step}
            </p>
          </div>

          {/* Completion Icon (visual only) */}
          <div className="shrink-0 pt-1">
            <CheckCircle2 className="w-5 h-5 text-slate-300" />
          </div>
        </div>
      ))}
    </div>
  );
}
