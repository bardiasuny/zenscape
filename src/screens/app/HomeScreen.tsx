import React, { useState } from 'react';
import {
    Text, View, StyleSheet, Button,
    ScrollView,
    FlatList,
    TouchableHighlight
} from 'react-native';
import useAuthentication from '../../hooks/useAuthentication';
import ZenButton from '../../components/ZenButton';
import { useProfile } from '../../context/ProfileProvider';
import headerImage from '../../../assets/images/home-header.png';
import HeaderImage from '../../components/HeaderImage';
import { SCREEN_HEIGHT } from '../../utils/CONST_LAYOUTS';
import ZenText from '../../components/ZenText';
import COLORS from '../../utils/COLORS';
import ZenTextInput from '../../components/ZenTextInput';
import SearchIcon from '../../../assets/icons/SearchIcon';
import MEDITATIONS from '../../data/MEDITATIONS';
import ZenMediaCards from '../../components/ZenMediaCards';

interface HomeScreenProps {}

const HomeScreen = (props: HomeScreenProps) => {
    const { logout } = useAuthentication();
    const { profile } = useProfile();

    const [searchText, setSearchText] = useState('');

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.imageContainer}>
                <HeaderImage
                    image={headerImage}
                    gradientColor={['transparent', 'transparent', 'transparent', 'transparent', COLORS.BACKGROUND_COLOR]}
                />
            </View>
            <View style={styles.bottomContainer}>
                <View style={styles.title}>
                    <ZenText
                        heading
                        bold
                        center
                    >
                        Let’s Meditate
                    </ZenText>
                    <ZenText
                        center
                        subtitle
                        opacity={0.7}
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
                </View>
                <View style={styles?.contentWrapper}>
                    <View style={styles?.meditationSessionsTitle}>
                        <ZenText
                            fontSize={22}
                            bold
                        >
                            Mindfulness sessions
                        </ZenText>
                        <TouchableHighlight
                            onPress={() => console.log('View all')}
                        >
                            <ZenText
                                color={COLORS.PRIMARY_COLOR}
                                bold
                            >
                                View all
                            </ZenText>
                        </TouchableHighlight>
                    </View>
                    <View>
                        <FlatList
                            data={MEDITATIONS}
                            horizontal
                            decelerationRate="fast"
                            disableIntervalMomentum
                            snapToAlignment="start"
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{ paddingHorizontal: 20 }}
                            scrollEventThrottle={16}
                            snapToInterval={150}
                            renderItem={({ item }) => (
                                <View>
                                    <ZenMediaCards
                                        title={item.title}
                                        duration={item.duration}
                                        type={item.type}
                                        image={item.image}
                                    />
                                </View>
                            )}
                            keyExtractor={(item) => item.title}
                        />
                    </View>
                </View>
            </View>

        </ScrollView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        overflow: 'hidden',
    },
    bottomContainer: {
        flex: 1,
    },
    title: {
        marginTop: -20
    },
    searchWrapper: {
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentWrapper: {
        marginTop: 30,
    },
    meditationSessionsTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 15
    }
});
