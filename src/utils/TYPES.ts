export type OnboardingQuestionOptions = {
    value: string;
    key: string;
};

export type OnboardingQuestionProps = {
    id: string;
    question: string;
    key: string;
    placeholder?: string;
    type: string;
    options?: OnboardingQuestionOptions[];
};
