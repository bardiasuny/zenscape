import { onAuthStateChanged } from 'firebase/auth';
import React, {
    useState, createContext, useContext, useEffect
} from 'react';
import {
    doc, getDoc, getFirestore, onSnapshot, setDoc
} from 'firebase/firestore';
import { auth } from '../../config/firebase';

const db = getFirestore();

type ProfileData = Record<string, string | number | boolean>;

const ProfileProviderContext = createContext(null);

const { Provider } = ProfileProviderContext;

const ProfileProvider = ({ children }) => {
    const [profile, setProfile] = useState(undefined);

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user?.uid) {
                const profileRef = doc(db, `users/${user.uid}`);
                onSnapshot(profileRef, (document) => {
                    if (document.exists()) {
                        setProfile(document.data());
                    }
                });
            } else {
                setProfile(undefined);
            }
        });
    }, []);

    const updateProfile = async (data: ProfileData) => {
        if (!auth?.currentUser?.uid) return;
        try {
            const profileRef = doc(db, `users/${auth?.currentUser?.uid}`);
            await setDoc(profileRef, data, { merge: true });
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    };

    return (
        <Provider value={{ profile, updateProfile }}>
            {children}
        </Provider>
    );
};

export const useProfile = () => {
    const { profile, updateProfile } = useContext<{
        profile: ProfileData | undefined,
        updateProfile:(data: ProfileData) => Promise<void>
    }>(ProfileProviderContext);

    return { profile, updateProfile };
};

export default ProfileProvider;
