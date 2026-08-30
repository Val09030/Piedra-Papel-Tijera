import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Header } from '../components/Header';
import { ScoreBoard } from '../components/ScoreBoard';
import { ChoiceButton } from '../components/ChoiceButtons';
import { ResultDisplay } from '../components/ResultDisplay';

import { useGame } from '../hooks/useGame';

export default function HomeScreen() {

  const {
    playerScore,
    computerScore,
    result,
    play,
  } = useGame();

  return (
    <SafeAreaView style={styles.container}>

      <Header />

      <View style={styles.content}>

        <Text style={styles.title}>
          Piedra, Papel, Tijeras
        </Text>

        <ScoreBoard
          playerScore={playerScore}
          computerScore={computerScore}
        />

        <Text style={styles.instructions}>
          Elige una opción
        </Text>

        <View style={styles.choices}>

          <ChoiceButton
            choice="piedra"
            onPress={() => play('piedra')}
          />

          <ChoiceButton
            choice="papel"
            onPress={() => play('papel')}
          />

          <ChoiceButton
            choice="tijeras"
            onPress={() => play('tijeras')}
          />

        </View>

        <ResultDisplay result={result} />

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  content: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
  },

  title: {
    fontSize: 22,
    color: '#222222',
    marginBottom: 25,
  },

  instructions: {
    fontSize: 16,
    color: '#777777',
    marginTop: 45,
    marginBottom: 15,
  },

  choices: {
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});