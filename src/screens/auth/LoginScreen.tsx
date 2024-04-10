import * as React from 'react';
import {
    Text, View, StyleSheet, Image, Touchable, TouchableOpacity, KeyboardAvoidingView, Platform
} from 'react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import backgroundImage from '../../../assets/images/login_bg.png';
import Logo from '../../../assets/images/logo_light.png';
import BackgroundScreenWrapper from '../../components/BackgroundScreenWrapper';
import ZenText from '../../components/ZenText';
import ZenTextInput from '../../components/ZenTextInput';
import ZenButton from '../../components/ZenButton';
import useAuthentication from '../../hooks/useAuthentication';
import COLORS from '../../utils/COLORS';

interface LoginScreenProps {
    navigation: NavigationProp<ParamListBase>
}

const LoginScreen = ({ navigation }: LoginScreenProps) => {
    const [credentials, setCredentials] = React.useState({
        email: '',
        password: '',

    });

    const { login, loading } = useAuthentication();

    return (
        <BackgroundScreenWrapper image={backgroundImage}>
            <View style={styles.container}>
                <KeyboardAvoidingView
                    style={styles.keyboardWrapper}
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
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
                                    placeholder={key}
                                    secureTextEntry={key === 'password'}
                                    value={credentials[key]}
                                    onChangeText={(text) => setCredentials(
                                        (prevState) => ({ ...prevState, [key]: text })
                                    )}
                                />
                            )) }
                        </View>
                        <View style={{ marginTop: 15 }}>
                            <ZenButton
                                onPress={() => login(credentials.email, credentials.password)}
                                loading={loading}
                            >
                                Login
                            </ZenButton>
                        </View>
                        <View style={{ marginTop: 1 }}>
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate('Signup');
                                }}
                            >
                                <ZenText>Don’t have an account? Signup</ZenText>
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </View>
        </BackgroundScreenWrapper>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    textTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: COLORS.TEXT_COLOR,
    },
    inputsWrapper: {
        width: '100%',
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
    },
    keyboardWrapper: {
        height: '100%',
        justifyContent: 'flex-end',
    }
});
