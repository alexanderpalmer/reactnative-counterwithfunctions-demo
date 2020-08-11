import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyCounter from './components/MyCounter';

const MyComponent = (props) => {
  return (
    <View>
      <Text>{props.text}</Text>
    </View>
  )
}

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <MyComponent text="Ich bin eine Komponente!" />
      <MyCounter start="1" end="10" />
      <StatusBar style="auto" />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
