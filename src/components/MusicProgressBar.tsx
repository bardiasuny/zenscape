import React, { useEffect, useRef, useState } from 'react';
import {
    View,
    Text,
    Animated,
    PanResponder,
    StyleSheet,
    Dimensions,
} from 'react-native';
import COLORS from '../utils/COLORS';

const { width } = Dimensions.get('window');

const MusicProgressBar = ({ duration = 490, currentTime, onScrub }) => {
    const [progressWidth, setProgressWidth] = useState(0);
    const progress = useRef(new Animated.Value(0)).current;
    const [scrubbingTime, setScrubbingTime] = useState(currentTime || 0);

    useEffect(() => {
    // Animate the orange progress bar as the song progresses
        Animated.timing(progress, {
            toValue: (scrubbingTime / duration) * progressWidth,
            duration: 500,
            useNativeDriver: false,
        }).start();
    }, [scrubbingTime, progressWidth]);

    // PanResponder to handle scrubbing gestures
    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: (e, gestureState) => {
                const newScrubTime = Math.max(
                    0,
                    Math.min(
                        (gestureState.x / progressWidth) * duration,
                        duration
                    )
                );
                setScrubbingTime(newScrubTime);
            },
            onPanResponderRelease: () => {
                onScrub(scrubbingTime); // Notify the parent to play music from this time
            },
        })
    ).current;

    // Convert seconds to "MM:SS" format
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <View style={styles.container}>
            <Text style={styles.timeText}>{formatTime(scrubbingTime)}</Text>
            <View
                style={styles.progressContainer}
                onLayout={(e) => setProgressWidth(e.nativeEvent.layout.width)}
                {...panResponder.panHandlers}
            >
                <Animated.View
                    style={[
                        styles.orangeBar,
                        { width: progress, backgroundColor: '#F28C47' },
                    ]}
                />
                <View style={styles.grayBar} />
            </View>
            <Text style={styles.timeText}>{formatTime(duration)}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        width: width - 20,
    },
    timeText: {
        color: COLORS.TEXT_COLOR,
        fontSize: 14,
        width: 50,
    },
    progressContainer: {
        flex: 1,
        height: 4,
        backgroundColor: 'transparent',
        position: 'relative',
    },
    orangeBar: {
        position: 'absolute',
        height: '100%',
    },
    grayBar: {
        width: '100%',
        height: 4,
        backgroundColor: '#666',
        position: 'absolute',
    },
});

export default MusicProgressBar;
