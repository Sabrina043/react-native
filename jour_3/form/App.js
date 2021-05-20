import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, TextInput, View,  } from 'react-native';
import Form from './Form';
// import { Slider } from 'react-native-elements';


export default function App() {
  return (
    <View style={styles.container}>
      <Form>
      </Form>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
