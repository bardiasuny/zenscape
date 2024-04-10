import * as React from 'react';
import {
    Text, View, StyleSheet, Image, Touchable, TouchableOpacity, KeyboardAvoidingView, Platform
} from 'react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import backgroundImage from '../../../assets/images/signup_bg.png';
import Logo from '../../../assets/images/logo_light.png';
import BackgroundScreenWrapper from '../../components/BackgroundScreenWrapper';
import ZenText from '../../components/ZenText';
import ZenTextInput from '../../components/ZenTextInput';
import ZenButton from '../../components/ZenButton';
import useAuthentication from '../../hooks/useAuthentication';
import COLORS from '../../utils/COLORS';

interface SignupScreenProps {
    navigation: NavigationProp<ParamListBase>
}

const SignupScreen = ({ navigation }: SignupScreenProps) => {
    const [credentials, setCredentials] = React.useState({
        email: '',
        password: '',
    });

    const { register, loading } = useAuthentication();

    return (
        <BackgroundScreenWrapper image={backgroundImage}>
            <View style={styles.container}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={styles.keyboardContainer}
                >
                    <View style={styles.inputsWrapper}>
                        <Image source={Logo} style={styles.logo} />
                        <ZenText heading bold>ZenScape</ZenText>
                        <ZenText>
                            Find Peace, Feel Joy, Embrace Life
                        </ZenText>

                        <View style={styles.inputWrapper}>
                            {Object.keys(credentials).map((key: string) => (
                                <ZenTextInput
                                    key={key}
                                    secureTextEntry={key === 'password'}
                                    placeholder={key}
                                    value={credentials[key]}
                                    onChangeText={(text) => setCredentials(
                                        (prevState) => ({ ...prevState, [key]: text })
                                    )}
                                />
                            )) }
                        </View>
                        <View style={{ marginTop: 15 }}>
                            <ZenButton
                                onPress={() => {
                                    register(credentials.email, credentials.password);
                                }}
                                loading={loading}
                            >
                                Signup
                            </ZenButton>
                        </View>
                        <View style={{ marginTop: 1 }}>
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate('Login');
                                }}
                            >
                                <ZenText>Have an account? Login</ZenText>
                            </TouchableOpacity>
                        </View>

                    </View>
                </KeyboardAvoidingView>
            </View>
        </BackgroundScreenWrapper>
    );
};

export default SignupScreen;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    keyboardContainer: {
        height: '100%',
        justifyContent: 'flex-end',
    },
    textTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: COLORS.TEXT_COLOR,
    },
    inputsWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    inputWrapper: {
        marginTop: 25
    }
});
