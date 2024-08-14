import React, { useMemo, useRef, useState } from 'react';
import {
    Text, View, StyleSheet, Touchable,
    TouchableOpacity
} from 'react-native';
import BackgroundScreenWrapper from '../../components/BackgroundScreenWrapper';
import backgroundImage from '../../../assets/images/onboarding_bg.png';
import ZenText from '../../components/ZenText';
import { SCREEN_HORIZONTAL_PADDING, SCREEN_WIDTH } from '../../utils/CONST_LAYOUTS';
import ZenButton from '../../components/ZenButton';
import ONBOARDING_QUESTIONS from '../../utils/data/ONBOARDING_QUESTIONS';
import QuestionCarousel from '../../components/QuestionCarousel';
import ProgressSteps from '../../components/ProgressSteps';
import { useProfile } from '../../context/ProfileProvider';

const OnboardingQuestionsScreen = () => {
    const [answers, setAnswers] = useState({});
    const [carouselIndex, setCarouselIndex] = useState(0);

    const { updateProfile } = useProfile();

    const carouselRef = useRef(null);

    const isLast = carouselIndex === ONBOARDING_QUESTIONS.length - 1;

    const onNext = async () => {
        if (!isLast) {
            carouselRef?.current?.scrollToIndex({ index: carouselIndex + 1 });
        } else {
            await updateProfile({ hasOnboarding: true, ...answers });
        }
    };

    const onBack = () => {
        if (carouselIndex > 0) {
            carouselRef?.current?.scrollToIndex({ index: carouselIndex - 1 });
        }
    };

    const isStepCompleted = useMemo(
        () => !!answers?.[ONBOARDING_QUESTIONS?.[carouselIndex]?.key],
        [carouselIndex, answers]
    );

    return (
        <BackgroundScreenWrapper image={backgroundImage}>
            <View style={styles.container}>
                <View style={styles.progressWrapper}>
                    <ProgressSteps
                        totalSteps={ONBOARDING_QUESTIONS?.length}
                        currentStep={carouselIndex}
                    />
                </View>
                <View style={styles.questionWrapper}>
                    <QuestionCarousel
                        questions={ONBOARDING_QUESTIONS}
                        answers={answers}
                        updateAnswers={(key: string, value: string) => {
                            setAnswers((prevState) => ({ ...prevState, [key]: value }));
                        }}
                        setCarouselIndex={setCarouselIndex}
                        carouselIndex={carouselIndex}
                        carouselRef={carouselRef}
                    />
                </View>
                <View style={styles.buttonWrapper}>
                    <ZenButton
                        disabled={!isStepCompleted}
                        onPress={() => (isStepCompleted ? onNext() : {})}
                    >
                        {isLast ? 'Lets Start' : 'Next'}
                    </ZenButton>
                    <TouchableOpacity
                        onPress={onBack}
                        style={{
                            opacity: carouselIndex === 0 ? 0.4 : 1
                        }}
                    >
                        <ZenText>Back</ZenText>
                    </TouchableOpacity>
                </View>
            </View>
        </BackgroundScreenWrapper>
    );
};

export default OnboardingQuestionsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    progressWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    questionWrapper: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }

});
