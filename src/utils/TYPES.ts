import { FlatList } from 'react-native';

type OptionsType = {
    key: string;
    value: string;
};

type QuestionType = {
    id: string;
    question: string;
    key: string;
    type: string;
    options?: OptionsType[];
};

interface QuestionCarouselProps {
    questions: QuestionType[]
    carouselRef: React.RefObject<FlatList>
    currentQuestionIndex: number
    setCurrentQuestionIndex: (index: number) => void
    answers: object
    updateAnswer: (key: string, value: string) => void
}

export { QuestionType, OptionsType, QuestionCarouselProps };
