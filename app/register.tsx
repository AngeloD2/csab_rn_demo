import { StyleSheet, Platform, Button, TextInput, View, SafeAreaView, Keyboard, KeyboardAvoidingView } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useEffect, useState } from 'react';
import { createWithEmailPassword } from '@/plugins/firebase'
import { useRouter } from 'expo-router';
import BackBtn from '@/components/BackBtn'
import { getAuth } from '@react-native-firebase/auth';;

export default function RegisterScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const auth = getAuth();
  const router = useRouter();

  async function handleCreateAccount() {
    const credentials = {
      email,
      password
    }

    if (!credentials.email || !credentials.password) {
      Keyboard.dismiss();
      console.log('returning early, empty fields')
      setError('Either email or password is empty.')
      return;
    }

    Keyboard.dismiss();

    await createWithEmailPassword({ credentials })
  }

  useEffect(() => {
    if (auth.currentUser) {
      router.replace('/(authed)')
    }
  }, [auth])

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError('')
      }, 5000)
    }
  }, [error])

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoidingView}
      >

        <ThemedView style={styles.screen}>

          <View style={styles.screenHeader}>
            <BackBtn href="/" />
          </View>

          <View style={styles.titleContainer}>
            <ThemedText type="title"> Reklamador </ThemedText>
            <ThemedText type="subtitle"> Registration  </ThemedText>
          </View>

          <View style={[styles.screenContent, { paddingBottom: 32 }]}>
            <View style={styles.inputContainer}>
              <View>
                <ThemedText> Email </ThemedText>
                <TextInput value={email} onChangeText={setEmail} style={styles.input} />
              </View>
              <View>
                <ThemedText> Password </ThemedText>
                <TextInput secureTextEntry value={password} onChangeText={setPassword} style={styles.input} />
              </View>
              <Button title='Register' onPress={handleCreateAccount} />
            </View>

          </View>
          {error && <ThemedText type="default" lightColor='red' darkColor='maroon'> {error} </ThemedText>}
        </ThemedView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#fff'
  },
  keyboardAvoidingView: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  screen: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.8,
    width: '100%',
    maxWidth: 600,
  },
  screenHeader: {
    position: 'absolute',
    left: 36,
    top: 0,
  },
  screenContent: {
    width: '45%',
    paddingTop: 60,
    justifyContent: 'center',
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.2,
  },
  title: {
    textAlign: 'center',
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
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
