import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import Button from './components/Button';

export default function App() {
  return (
    <View style={styles.container}>
      <Button>Default Button</Button>
      <Button size="small">Small Button</Button>
      <Button size="large">Large Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Button variant="secondary" size="small">
        Secondary Small Button
      </Button>
      <Button disabled>Disabled Button</Button>
      <Button style={styles.customButton}>Custom Button</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    gap: 16,
  },
  customButton: {
    backgroundColor: 'darkgreen',
    borderColor: 'lightgreen',
  },
});
