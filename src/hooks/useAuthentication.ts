import {
    createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut
} from 'firebase/auth';
import { Alert } from 'react-native';
import { useState } from 'react';
import { auth } from '../../config/firebase';

const validate = (email: string, password: string) => {
    if (!email || !password) {
        return false;
    }
    return true;
};

const useAuthentication = () => {
    const [loading, setLoading] = useState(false);
    const register = async (email: string, password: string) => {
        setLoading(true);
        console.log('Registering user with email:', email, 'and password:', password);
        if (!validate(email, password)) return Alert.alert('Invalid email or password');
        try {
            const registerUser = await createUserWithEmailAndPassword(auth, email, password);
            console.log('User registered:', registerUser);
        } catch (error) {
            Alert.alert('Error registering user', error.message);
            console.log('Error registering user:', error);
        }
        setLoading(false);
    };

    const login = async (email: string, password: string) => {
        setLoading(true);
        console.log('Logging in user with email:', email, 'and password:', password);
        if (!validate(email, password)) return Alert.alert('Invalid email or password');
        try {
            const registerUser = await signInWithEmailAndPassword(auth, email, password);
            console.log('User registered:', registerUser);
        } catch (error) {
            Alert.alert('Error login user', error.message);
            console.log('Error login user:', error);
        }
        setLoading(false);
    };

    const logout = async () => {
        setLoading(true);
        console.log('Logging out user');
        try {
            await signOut(auth);
            console.log('User logged out');
        } catch (error) {
            Alert.alert('Error logging out user', error.message);
            console.log('Error logging out user:', error);
        }
        setLoading(false);
    };

    return {
        register,
        login,
        logout,
        loading
    };
};

export default useAuthentication;
