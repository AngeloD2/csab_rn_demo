import auth from '@react-native-firebase/auth';


export async function createWithEmailPassword({ credentials }) {
    try {
        const res = await auth().createUserWithEmailAndPassword(credentials.username, credentials.password);

        if (res.user) {
            console.log("User successfully registered.")
        }
    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
        }

        console.error(error)
    }
}

