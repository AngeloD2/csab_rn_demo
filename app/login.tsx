import { StyleSheet, Platform, Button, TextInput, View, Text, Keyboard, SafeAreaView, KeyboardAvoidingView } from 'react-native';

import { getAuth } from '@react-native-firebase/auth';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';
import { signInWithEmailAndPassword } from '@react-native-firebase/auth';
import { Link, useRouter } from 'expo-router';


export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const [isLoggingIn, setIsLoggingIn] = useState(false)


  const router = useRouter();
  const auth = getAuth();

  async function handleLogin() {
    const credentials = {
      email,
      password
    }

    if (!credentials.email || !credentials.password) {
      Keyboard.dismiss();
      setError('Either email or password is empty.')
      return;
    }

    Keyboard.dismiss();
    try {
      setIsLoggingIn(true)

      const res = await signInWithEmailAndPassword(auth, credentials.email, credentials.password)

      if (res) {
        router.replace('/(authed)')
      }
    } catch (error) {
      console.error('Error during sign in: ', error);
    } finally {
      setIsLoggingIn(false)
    }
  }


  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoidingView}
      >
        <ThemedView style={styles.screen}>

          <View style={styles.titleContainer}>
            <ThemedText type="title"> CSAB Mobile Demo </ThemedText>
          </View>

          <ThemedView style={[styles.screenContent, { paddingBottom: 32 }]}>
            <View style={styles.inputContainer}>
              <View>
                <ThemedText type="defaultSemiBold"> Email </ThemedText>
                <TextInput value={email} onChangeText={setEmail} style={styles.input} />
              </View>
              <View>
                <ThemedText type="defaultSemiBold"> Password </ThemedText>
                <TextInput secureTextEntry value={password} onChangeText={setPassword} style={styles.input} />
              </View>
              <Button disabled={isLoggingIn} title='Login' onPress={handleLogin} />
            </View>
          </ThemedView>

          <View style={{ alignItems: 'center', rowGap: 24 }}>
            <View style={{ alignItems: 'center' }}>
              <Text> Don't have an account? </Text>
              <Link href="/register" style={{ color: 'blue' }}>
                Click here to register.
              </Link>
            </View>
            {error && <ThemedText type="default" lightColor='red' darkColor='maroon'> {error} </ThemedText>}
          </View>
        </ThemedView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    paddingVertical: 50,
    backgroundColor: '#fff'
  },
  keyboardAvoidingView: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.2,
  },
  screen: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.8,
    width: '100%',
    maxWidth: 600,
  },
  screenContent: {
    width: '45%',
    paddingTop: 60,
    backgroundColor: 'none',
    justifyContent: 'center',
  },
  title: {
    margin: 0,
    padding: 8,
    fontSize: 28,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  inputContainer: {
    rowGap: 12,
  },
  input: {
    borderBottomWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderBottomColor: 'gray',
  },
});
