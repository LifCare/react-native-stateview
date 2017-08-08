import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StateView from 'react-native-stateview'

export default class App extends React.Component {
  render() {
    return (
      <StateView style={styles.container} mode={StateView.Mode.loading}>
        <Text>Open up App.js to start working on your app!</Text>
      </StateView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
