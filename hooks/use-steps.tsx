import React from 'react';

type UseStepsResult = {
  currentStep: number;
  maxSteps: number;
  goToNextStep: () => void;
  goToPreviousStep: () => void;
};

function useSteps(initialStep: number, maxSteps: number): UseStepsResult {
  const [currentStep, setCurrentStep] = React.useState<number>(initialStep);

  function goToNextStep() {
    setCurrentStep(Math.min(currentStep + 1, maxSteps));
  }

  function goToPreviousStep() {
    setCurrentStep(Math.max(currentStep - 1, 1));
  }

  return {
    currentStep,
    maxSteps,
    goToNextStep,
    goToPreviousStep,
  };
}

export { useSteps };
