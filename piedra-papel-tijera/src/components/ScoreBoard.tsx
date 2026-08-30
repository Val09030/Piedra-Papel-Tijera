import { StyleSheet, Text, View } from 'react-native';

type ScoreBoardProps = {
  playerScore: number;
  computerScore: number;
};

export function ScoreBoard({
  playerScore,
  computerScore,
}: ScoreBoardProps) {
  return (
    <View style={styles.container}>

      <View style={styles.column}>
        <Text style={styles.label}>
          Jugador
        </Text>

        <Text style={styles.score}>
          {playerScore}
        </Text>
      </View>

      <View style={styles.column}>
        <Text style={styles.label}>
          Computadora
        </Text>

        <Text style={styles.score}>
          {computerScore}
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  column: {
    width: '45%',
    alignItems: 'center',
  },

  label: {
    color: '#777777',
    fontSize: 14,
    marginBottom: 8,
  },

  score: {
    width: '100%',
    textAlign: 'center',
    color: '#AAAAAA',
    fontSize: 17,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#BBBBBB',
  },
});