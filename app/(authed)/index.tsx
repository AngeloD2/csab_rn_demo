import { StyleSheet, Button, View, Text } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import { getAuth, signOut } from '@react-native-firebase/auth';
import { Redirect, useRouter } from 'expo-router';

export default function HomeScreen() {
  const auth = getAuth();
  const router = useRouter();

  async function handleLogout() {

    try {
      await signOut(auth)
    } catch (error) {
      console.error('Error during sign out:', error);
    } finally {
      if (!auth.currentUser) {
        router.replace('/login');
      }
    }
  }

  //this only runs on mount, 
  // this means that if the auth is unavailable before render, this will not run.
  if (!auth.currentUser) {
    return <Redirect href='/login' />;
  }

  return (
    <View style={styles.container}>
      <HelloWave />

      <Text> Email: {auth.currentUser?.email} </Text>
      <Text> UniqueID: {auth.currentUser?.uid} </Text>

      <Button title='logout' onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    rowGap: 16,
    backgroundColor: '#fff'
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
