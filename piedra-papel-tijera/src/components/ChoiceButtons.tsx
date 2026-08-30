import {
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

import { choiceImages } from '../game/choices';
import { Choice } from '../game/types';

type ChoiceButtonProps = {
  choice: Choice;
  onPress: () => void;
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
      <Image
        source={choiceImages[choice]}
        style={styles.image}
        resizeMode="contain"
      />
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
    borderRadius: 10,
  },

  image: {
    width: 80,
    height: 80,
  },
});