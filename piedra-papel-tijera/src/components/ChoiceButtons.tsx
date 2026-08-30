import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import { Choice } from '../game/types';

type ChoiceButtonProps = {
  choice: Choice;
  onPress: () => void;
};

const symbols = {
  piedra: '../../assets/images/piedra.jpg',
  papel: '../../assets/images/papel.jpg',
  tijeras: '../../assets/images/tijeras.jpg',
};

export function ChoiceButton({
  choice,
  onPress,
}: ChoiceButtonProps) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={styles.symbol}>
        {symbols[choice]}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 100,
    backgroundColor: '#D6D6D6',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },

  symbol: {
    fontSize: 55,
  },
});