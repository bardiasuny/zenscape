import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { auth } from '../../config/firebase';

const useIsLoggedIn = () => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean | undefined>(undefined);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setIsLoggedIn(!!user);
        });
    }, []);

    return isLoggedIn;
};

export default useIsLoggedIn;
