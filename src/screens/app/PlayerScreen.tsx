import React, {
    useEffect, useMemo, useRef, useState
} from 'react';
import {
    ActivityIndicator,
    Animated, Image, PanResponder, TouchableOpacity, View
} from 'react-native';
import { NavigationProp, ParamListBase, RouteProp } from '@react-navigation/native';
import { Audio, InterruptionModeAndroid, InterruptionModeIOS } from 'expo-av';
import { Sound } from 'expo-av/build/Audio';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import HeaderImage from '../../components/HeaderImage';
import playerImage from '../../../assets/images/player_Headerimage.png';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../utils/CONST_LAYOUTS';
import MusicProgressBar from '../../components/MusicProgressBar';
import MEDITATION_MEDIA from '../../utils/data/MEDITATION_MEDIA';
import ZenText from '../../components/ZenText';
import COLORS from '../../utils/COLORS';
import { usePlayerState } from '../../context/PlayerProvider';
import playerEmpty from '../../../assets/images/player_empty.png';
import playerFull from '../../../assets/images/player_full.png';

const PlayerScreen = () => {
    const { playerState, updatePlayerState, resetPlyerState } = usePlayerState();
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [sound, setSound] = useState<Sound | null>(null);

    const progress = useRef(new Animated.Value(0));

    useEffect(() => {
        Audio.setAudioModeAsync({
            staysActiveInBackground: true,
            playsInSilentModeIOS: true,
            interruptionModeIOS: InterruptionModeIOS.DuckOthers,
            interruptionModeAndroid: InterruptionModeAndroid.DuckOthers,
            shouldDuckAndroid: true,
            playThroughEarpieceAndroid: true,
        });
        return sound
            ? () => {
                sound.unloadAsync();
            }
            : undefined;
    }, [sound]);

    const playAudio = async () => {
        if (playerState?.isPlaying && sound) {
            await sound?.pauseAsync();
            updatePlayerState({
                isPlaying: false,
            });
            return;
        } if (!playerState?.isPlaying && sound) {
            await sound.playAsync();
            updatePlayerState({
                isPlaying: true,
            });
        }
        // Set and play the sound

        // After the sound has finished, update the state so that the icon changes
    };

    const onScrub = async (time: number) => {
        await sound?.setPositionAsync(time);
        updatePlayerState({
            isPlaying: true,
        });
    };

    const [loading, setLoading] = useState<boolean>(true);

    const [duration, setDuration] = useState<number>(0);

    const scrubbingStarted = useRef<boolean>(false);

    const settingUpSound = async () => {
        const { sound: newSound } = await Audio.Sound.createAsync({ uri: playerState?.audioUrl });
        setSound(newSound);
        newSound.setPositionAsync(0);
        newSound.setOnPlaybackStatusUpdate((status) => {
            if (scrubbingStarted.current) return;
            progress.current.setValue(status.positionMillis / status.durationMillis);
            setDuration(status.durationMillis);
            //  console.log('THISISISsd', status.positionMillis / status.durationMillis);

            if ('didJustFinish' in status && status.didJustFinish && !status.isLooping) {
                updatePlayerState({
                    isPlaying: false,
                });
            }
        });
    };

    const [isLooping, setIsLooping] = useState<boolean>(false);

    const toggleRepeat = async () => {
        console.log('repeating');
        const res = await sound.setIsLoopingAsync(!isLooping);
        console.log('resresresres', res);
        setIsLooping(res?.isLooping);
    };

    useEffect(() => {
        if (!progress.current) return;
        (async () => {
            setLoading(true);
            await sound?.unloadAsync();

            progress.current.setValue(0);
            setLoading(true);
            setSound(null);
            updatePlayerState({
                isPlaying: false,
            });

            await settingUpSound();
            setLoading(false);
        })();
    }, [playerState?.title, progress]);

    const width = progress.current.interpolate({
        inputRange: [0, 1],
        outputRange: ['0%', '100%'],
    });

    const progressWidth = SCREEN_WIDTH * 0.9;
    // PanResponder to handle scrubbing gestures
    const panResponder = useMemo(
        () => {
            if (!sound) return null;
            return PanResponder.create({
                onStartShouldSetPanResponder: () => true,
                onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
                onMoveShouldSetPanResponder: (evt, gestureState) => true,
                onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
                onPanResponderMove: (e, gestureState) => {
                    scrubbingStarted.current = true;
                    // Calculate the new progress based on the gesture's horizontal movement
                    const newProgress = ((gestureState.moveX
                        - ((SCREEN_WIDTH - progressWidth) / 2)) / progressWidth);
                    // Ensure the progress stays within the range [0, 1]
                    const clampedProgress = Math.max(0, Math.min(newProgress, 1));
                    // console.log('gestureState', gestureState, progressWidth);
                    progress.current.setValue(clampedProgress);
                },
                onPanResponderRelease: () => {
                    progress.current.stopAnimation((currentValue) => {
                        // Calculate the new position in milliseconds
                        const newPosition = currentValue * duration;
                        // Update the audio playback position
                        sound.setPositionAsync(newPosition);
                    });
                    scrubbingStarted.current = false;
                },
            });
        },
        [sound, duration]
    );

    if (!playerState?.fullScreen) {
        return (
            <View style={{
                height: 80,
                bottom: 80,
                width: '100%',
                overflow: 'hidden',
                position: 'absolute',
                backgroundColor: COLORS.BACKGROUND_COLOR,
            }}
            >
                <View
                    style={{
                        height: 80,
                        flexDirection: 'row',
                        padding: 10,
                        alignItems: 'center',
                    }}
                >
                    <TouchableOpacity
                        style={{
                            width: '80%',
                            flexDirection: 'column',
                            height: '100%',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                        onPress={() => updatePlayerState({
                            fullScreen: true,
                        })}
                    >
                        <Animated.View
                            style={{ width: SCREEN_WIDTH * 0.7 }}
                        >
                            <Image
                                source={playerEmpty}
                                style={{ width: '100%', height: 30 }}
                            />
                            <Animated.View
                                style={{
                                    width,
                                    overflow: 'hidden',
                                    position: 'absolute',
                                // backgroundColor: COLORS.TEXT_COLOR,
                                }}

                            >
                                <Image
                                    source={playerFull}
                                    style={{ width: SCREEN_WIDTH * 0.7, height: 30 }}
                                />
                            </Animated.View>
                        </Animated.View>
                    </TouchableOpacity>

                    <View
                        style={{
                            display: 'flex',
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <TouchableOpacity
                            onPress={playAudio}
                            style={{
                                width: 30,
                                height: 30,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: COLORS.TEXT_COLOR,
                                borderRadius: 50,
                                display: 'flex',
                            }}
                        >
                            {playerState?.isPlaying
                                ? <Ionicons name="pause" size={20} color="black" />
                                : <Ionicons name="play-sharp" size={20} color="black" />}
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        );
    }

    return (
        <View style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
        }}
        >

            <View style={{
                backgroundColor: COLORS.BACKGROUND_COLOR,
                minHeight: SCREEN_HEIGHT,
                justifyContent: 'center',
                alignItems: 'center',
            }}
            >
                <HeaderImage
                    image={playerImage}
                    height={SCREEN_WIDTH + 80}
                />

                <View style={{
                    marginTop: 20,
                    width: SCREEN_WIDTH,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                >
                    <ZenText subtitle center>
                        {playerState?.title}
                    </ZenText>

                    {panResponder && (
                        <View
                            style={{ width: progressWidth, marginTop: 20 }}
                            {...panResponder.panHandlers}
                        >
                            <Image
                                source={playerEmpty}
                                style={{ width: '100%', height: 30 }}
                            />
                            <Animated.View
                                style={{
                                    width,
                                    overflow: 'hidden',
                                    position: 'absolute',
                                // backgroundColor: COLORS.TEXT_COLOR,
                                }}
                            >
                                <Image
                                    source={playerFull}
                                    style={{ width: progressWidth, height: 30 }}
                                />
                            </Animated.View>
                        </View>
                    )}

                    {loading
                        ? (
                            <ActivityIndicator
                                size="large"
                                color={COLORS.PRIMARY_COLOR}
                                style={{ marginTop: 10 }}
                            />
                        ) : (
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                width: SCREEN_WIDTH * 0.7,
                                alignSelf: 'center',
                                marginTop: 20
                            }}
                            >
                                <TouchableOpacity
                                    onPress={toggleRepeat}
                                >
                                    <FontAwesome6 name="repeat" size={20} color={isLooping ? COLORS.PRIMARY_COLOR : COLORS.TEXT_COLOR} />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={playAudio}
                                    style={{
                                        width: 58,
                                        height: 58,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        marginTop: 10,
                                        padding: 10,
                                        backgroundColor: COLORS.TEXT_COLOR,
                                        borderRadius: 50,
                                    }}
                                >
                                    {playerState?.isPlaying
                                        ? <Ionicons name="pause" size={30} color="black" />
                                        : <Ionicons name="play-sharp" size={30} color="black" />}
                                </TouchableOpacity>
                                <FontAwesome6 name="shuffle" size={20} color={COLORS.TEXT_COLOR} />
                            </View>
                        )}
                </View>

            </View>
            <View
                style={{
                    position: 'absolute',
                    top: 40,
                    right: 10,
                    padding: 20,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
            >
                <TouchableOpacity onPress={() => updatePlayerState({
                    fullScreen: false,
                })}
                >
                    <Feather name="minimize-2" size={24} color={COLORS.TEXT_COLOR} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default PlayerScreen;
