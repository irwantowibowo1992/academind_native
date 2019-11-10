import React from 'react';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native';

export default function App() {
  return (
    <View style={{padding: 10}}>
      <View>
        <TextInput
          placeholder="Course Goal........"
          style={{borderColor: '#000', borderWidth: 1, padding: 10}}
        />

        <Button title="Add" />
      </View>
    </View>
  );
}
