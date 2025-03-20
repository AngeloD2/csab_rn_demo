import { useEffect, useState } from 'react';
import { getAuth, FirebaseAuthTypes } from '@react-native-firebase/auth';
import { useRouter, usePathname } from 'expo-router';

export function useAuthStateListener() {
    const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
    const auth = getAuth();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            if (currentUser !== user) {
                setUser(currentUser);
                if (!currentUser) {
                    // User logged out
                    console.log('User logged out');
                    router.replace('/');
                } else if (currentUser && pathname === '/') {
                    // User logged in and is on the login page
                    console.log('User is signed in:', currentUser);
                    router.replace('/(authed)');
                }
            }
        });

        return () => unsubscribe();
    }, [auth, router, pathname, user]);

    return user;
}