import React, { useState } from 'react';
import {
    View, StyleSheet,
    ScrollView,
    FlatList
} from 'react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import useAuthentication from '../../hooks/useAuthentication';
import ZenButton from '../../components/ZenButton';
import { useProfile } from '../../context/ProfileProvider';
import headerImage from '../../../assets/images/home-header.png';
import HeaderImage from '../../components/HeaderImage';
import ZenText from '../../components/ZenText';
import ZenTextInput from '../../components/ZenTextInput';
import SearchIcon from '../../../assets/icons/SearchIcon';
import MEDITATION_MEDIA from '../../utils/data/MEDITATION_MEDIA';
import ZenMediaCards from '../../components/ZenMediaCards';
import { usePlayerState } from '../../context/PlayerProvider';

interface HomeScreenProps {
    navigation: NavigationProp<ParamListBase>;
}

const HomeScreen = ({ navigation }: HomeScreenProps) => {
    const { logout } = useAuthentication();
    const { profile } = useProfile();

    const [searchText, setSearchText] = useState('');

    const { playerState, updatePlayerState, resetPlyerState } = usePlayerState();

    return (
        <ScrollView
            contentContainerStyle={styles.container}

        >
            <HeaderImage
                image={headerImage}
            />
            {/* <ZenButton onPress={logout}>
                <Text>Logout</Text>
            </ZenButton> */}
            <ZenText
                heading
                center
                bold
            >
                Let’s Meditate
            </ZenText>
            <ZenText
                subtitle
                center
                opacity={0.6}
                style={{ marginTop: 10 }}
            >
                Search entire library, find more content
            </ZenText>
            <View style={styles.searchWrapper}>
                <ZenTextInput
                    placeholder="Search"
                    value={searchText}
                    onChangeText={(text) => setSearchText(text)}
                    icon={() => <SearchIcon />}
                />
            </View>
            <View>
                <View style={styles.contentContainer}>
                    <ZenText
                        heading
                        bold
                        fontSize={22}
                        style={{ marginTop: 20 }}
                    >
                        Mindfulness sessions
                    </ZenText>
                </View>
                <FlatList
                    horizontal
                    data={MEDITATION_MEDIA}
                    contentContainerStyle={{ paddingHorizontal: 20, marginTop: 20 }}
                    keyExtractor={(item) => item.id}
                    snapToInterval={150}
                    decelerationRate="fast"
                    disableIntervalMomentum
                    snapToAlignment="start"
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <View>
                            <ZenMediaCards
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                duration={item.duration}
                                type={item.type}
                                audioUrl={item.audioUrl}
                                updatePlayerState={updatePlayerState}
                                resetPlyerState={resetPlyerState}
                            />
                        </View>
                    )}
                />
            </View>
            <View
                style={!playerState.fullScreen && playerState.audioUrl && {
                    height: 80,
                }}
            />
        </ScrollView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({

    searchWrapper: {
        marginTop: 15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentContainer: {
        paddingHorizontal: 20,
    }
});
