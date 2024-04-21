import React, { useRef, useState } from 'react';
import {
    Text, View, StyleSheet, FlatList
} from 'react-native';
import { SCREEN_WIDTH } from '../utils/CONST_LAYOUTS';
import ZenText from './ZenText';
import ZenOptionButton from './ZenOptionButton';
import ZenTextInput from './ZenTextInput';
import { QuestionCarouselProps, QuestionType } from '../utils/TYPES';

const QuestionCarousel = ({
    questions,
    carouselRef,
    answers,
    updateAnswer,
    currentQuestionIndex,
    setCurrentQuestionIndex
}: QuestionCarouselProps) => (
    <View style={styles.container}>
        <FlatList
            ref={carouselRef}
            data={questions}
            keyExtractor={(item) => item.id}
            horizontal
            snapToInterval={SCREEN_WIDTH}
            decelerationRate="fast"
            disableIntervalMomentum
            snapToAlignment="start"
            scrollEnabled={false}
            showsHorizontalScrollIndicator={false}
            style={{}}
            onScroll={(event) => {
                const contentOffsetX = event.nativeEvent.contentOffset.x;
                const currentIndex = Math.round(contentOffsetX / SCREEN_WIDTH);
                setCurrentQuestionIndex(currentIndex);
            }}
            renderItem={({ item }) => (
                <QuestionComponent
                    question={item}
                    onAnswer={(value: string) => {
                        updateAnswer(item?.key, value);
                    }}
                    answer={answers[item?.key]}
                />
            )}
        />

    </View>
);

const QuestionComponent = (
    { question, onAnswer, answer }:
    { question: QuestionType,
        onAnswer: (value: string) => void
        answer: string | null
    }
) => (
    <View style={styles.questionContainer}>
        <View style={styles.question}>
            <ZenText center headingS>{question.question}</ZenText>
        </View>
        {question?.options?.length && question?.options?.map(({ key: optionKey, value }) => {
            const isSelected = answer === optionKey;

            return (
                <ZenOptionButton
                    key={optionKey}
                    isSelected={isSelected}
                    value={value}
                    onPress={() => onAnswer(optionKey)}
                />
            );
        })}
        {
            (question?.type === 'text' || question?.type === 'number') && (
                <ZenTextInput
                    placeholder="Type your answer here"
                    onChangeText={(text) => {
                        onAnswer(text);
                    }}
                />
            )
        }
    </View>
);

export default QuestionCarousel;

const styles = StyleSheet.create({
    container: {},
    questionContainer: {
        width: SCREEN_WIDTH,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    question: {
        marginBottom: 20,
    },
});
