import { StyleSheet, Text, View } from 'react-native';

import { Result } from '../game/types';

type ResultDisplayProps = {
  result: Result;
};

export function ResultDisplay({
  result,
}: ResultDisplayProps) {

  let message = 'ELIGE UNA JUGADA';

  if (result === 'Ganaste') {
    message = 'GANASTE';
  }

  if (result === 'Perdiste') {
    message = 'PERDISTE';
  }

  if (result === 'empate') {
    message = 'EMPATE';
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {message}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEEEEE',
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 25,
  },

  text: {
    fontSize: 13,
    color: '#222222',
  },
});