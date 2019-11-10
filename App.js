import React from 'react';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native';

export default function App() {
  return (
    <View style={{padding: 10}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TextInput
          placeholder="Course Goal........"
          style={{
            borderColor: '#000',
            borderWidth: 1,
            padding: 10,
            width: '80%',
          }}
        />

        <Button title="Add" />
      </View>

      <View
        style={{
          padding: 50,
          flexDirection: 'row',
          width: '80%',
          height: 300,
          justifyContent: 'space-around',
          alignItems: 'stretch',
        }}>
        <Text
          style={{
            backgroundColor: 'red',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          Teks 1
        </Text>
        <Text
          style={{
            backgroundColor: 'green',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          Teks 2
        </Text>
        <Text
          style={{
            backgroundColor: 'blue',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          Teks 3
        </Text>
      </View>
    </View>
  );
}
