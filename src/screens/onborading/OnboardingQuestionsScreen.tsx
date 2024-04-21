import { NavigationProp, ParamListBase } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import {
    Text, View, StyleSheet, FlatList, TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import BackgroundScreenWrapper from '../../components/BackgroundScreenWrapper';
import backgroundImage from '../../../assets/images/onboarding_bg.png';
import ZenText from '../../components/ZenText';
import ZenButton from '../../components/ZenButton';
import ONBOARDING_QUESTIONS from '../../utils/data/ONBOARDING_QUESTIONS';
import QuestionCarousel from '../../components/QuestionCarousel';
import COLORS from '../../utils/COLORS';
import { SCREEN_WIDTH } from '../../utils/CONST_LAYOUTS';
import { QuestionType } from '../../utils/TYPES';
import OnBoardingProgressBar from '../../components/OnBoardingProgress';

interface OnboardingQuestionsScreenProps {
    navigation: NavigationProp<ParamListBase>;
}

const OnboardingQuestionsScreen = ({ navigation }: OnboardingQuestionsScreenProps) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
    const carouselRef = useRef<FlatList>(null);

    const initialState = Object.fromEntries(ONBOARDING_QUESTIONS.map(
        (question:QuestionType) => [question.key, null]
    ));

    const [answers, setAnswers] = useState(initialState);

    // console.log('answers', JSON.stringify(answers, null, 2));

    const updateAnswer = (key: string, value: string) => {
        setAnswers((prevAnswer) => ({
            ...prevAnswer,
            [key]: value,
        }));
    };

    const [isLastQuestion, setIsLastQuestion] = React.useState(false);

    useEffect(() => {
        if (currentQuestionIndex === ONBOARDING_QUESTIONS.length - 1) {
            setIsLastQuestion(true);
        } else {
            setIsLastQuestion(false);
        }
    }, [currentQuestionIndex]);

    const questionKey = ONBOARDING_QUESTIONS[currentQuestionIndex].key;
    const hasAnswered = !!answers[questionKey];

    const isMultiChoice = ONBOARDING_QUESTIONS[currentQuestionIndex].type === 'multi';

    useEffect(() => {
        if (isMultiChoice) {
            if (hasAnswered) onNextPress();
        }
    }, [answers]);

    const onNextPress = () => {
        if (isLastQuestion) {
            // submit answers
            // and navigate to Home screen
            return;
        }

        if (!hasAnswered) return;

        if (carouselRef.current) {
            carouselRef.current.scrollToIndex({
                index: currentQuestionIndex + 1,
                animated: true,
            });
        }
    };

    const onBackPress = () => {
        if (currentQuestionIndex > 0) {
            if (carouselRef.current) {
                carouselRef.current.scrollToIndex({
                    index: currentQuestionIndex - 1,
                    animated: true,
                });
            }
        }
    };

    return (
        <BackgroundScreenWrapper image={backgroundImage}>
            <View style={styles.container}>
                <View style={styles.headerWrapper}>
                    <OnBoardingProgressBar
                        currentQuestionIndex={currentQuestionIndex}
                        totalQuestions={ONBOARDING_QUESTIONS.length}
                    />
                </View>
                <View style={styles.midsectionWrapper}>
                    <QuestionCarousel
                        currentQuestionIndex={currentQuestionIndex}
                        setCurrentQuestionIndex={setCurrentQuestionIndex}
                        carouselRef={carouselRef}
                        questions={ONBOARDING_QUESTIONS}
                        updateAnswer={updateAnswer}
                        answers={answers}
                    />
                </View>
                <View style={styles.buttonSectionWrapper}>
                    {(!isMultiChoice || isLastQuestion) && (
                        <ZenButton disabled={!hasAnswered} onPress={onNextPress}>
                            {isLastQuestion ? 'Lets start' : 'Next'}
                        </ZenButton>
                    )}
                    {currentQuestionIndex > 0 && (
                        <TouchableOpacity
                            style={styles.backButton}
                            onPress={onBackPress}
                        >
                            <Ionicons name="chevron-back" size={24} color={COLORS.TEXT_COLOR} />
                            <ZenText>Back</ZenText>
                        </TouchableOpacity>
                    )}

                </View>
            </View>
        </BackgroundScreenWrapper>
    );
};

export default OnboardingQuestionsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerWrapper: {
        flex: 1,
        justifyContent: 'center',
        width: SCREEN_WIDTH,
        alignItems: 'center',
        position: 'relative'
    },
    midsectionWrapper: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonSectionWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5

    }
});
