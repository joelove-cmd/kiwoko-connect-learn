import { Check, CreditCard, FileText, GraduationCap, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface StepIndicatorProps {
  currentStep: number;
  paymentCompleted: boolean;
}

const StepIndicator = ({ currentStep, paymentCompleted }: StepIndicatorProps) => {
  const steps = [
    {
      number: 1,
      title: "Personal & Medical",
      description: "Basic information",
      icon: User,
    },
    {
      number: 2,
      title: "Academic Info",
      description: "Education & documents",
      icon: GraduationCap,
    },
    {
      number: 3,
      title: "Payment",
      description: "Application fee",
      icon: CreditCard,
    },
    {
      number: 4,
      title: "Declaration",
      description: "Review & submit",
      icon: FileText,
    },
  ];

  const getStepStatus = (stepNumber: number) => {
    if (stepNumber < currentStep) return "completed";
    if (stepNumber === currentStep) return "current";
    if (stepNumber === 3 && paymentCompleted) return "completed";
    return "upcoming";
  };

  return (
    <div className="w-full bg-background border-b">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav aria-label="Progress">
          <ol className="flex items-center justify-between">
            {steps.map((step, stepIdx) => {
              const status = getStepStatus(step.number);
              const Icon = step.icon;
              
              return (
                <li key={step.number} className="relative flex-1">
                  {stepIdx !== steps.length - 1 && (
                    <div className="absolute top-4 left-1/2 w-full h-0.5 bg-border -translate-y-1/2 z-0">
                      <div 
                        className={cn(
                          "h-full transition-all duration-300",
                          status === "completed" || (step.number <= currentStep) 
                            ? "bg-primary" 
                            : "bg-border"
                        )}
                        style={{
                          width: status === "completed" || (step.number < currentStep) ? "100%" : "0%"
                        }}
                      />
                    </div>
                  )}
                  
                  <div className="relative flex flex-col items-center group">
                    <div
                      className={cn(
                        "flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 z-10 bg-background border-2",
                        status === "completed"
                          ? "border-primary bg-primary text-white"
                          : status === "current"
                          ? "border-primary bg-primary text-white"
                          : "border-border bg-background text-muted-foreground"
                      )}
                    >
                      {status === "completed" ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <Icon className="h-4 w-4" />
                      )}
                    </div>
                    
                    <div className="mt-2 text-center">
                      <p
                        className={cn(
                          "text-sm font-medium transition-colors duration-300",
                          status === "current"
                            ? "text-primary"
                            : status === "completed"
                            ? "text-primary"
                            : "text-muted-foreground"
                        )}
                      >
                        {step.title}
                      </p>
                      <p className="text-xs text-muted-foreground hidden sm:block">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default StepIndicator;