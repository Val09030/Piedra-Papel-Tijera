import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

type Choice = 'piedra' | 'papel' | 'tijeras';

export default function HomeScreen() {
  const [jugador, setJugador] = useState(0);
  const [computadora, setComputadora] = useState(0);

  const [jugadaComputadora, setJugadaComputadora] =
    useState<Choice>('piedra');

  const [resultado, setResultado] = useState('R: JUGADOR');

  const jugar = (eleccion: Choice) => {
    const opciones: Choice[] = ['piedra', 'papel', 'tijeras'];

    const aleatoria =
      opciones[Math.floor(Math.random() * opciones.length)];

    setJugadaComputadora(aleatoria);

    if (eleccion === aleatoria) {
      setResultado('EMPATE');
      return;
    }

    const ganaJugador =
      (eleccion === 'piedra' && aleatoria === 'tijeras') ||
      (eleccion === 'papel' && aleatoria === 'piedra') ||
      (eleccion === 'tijeras' && aleatoria === 'papel');

    if (ganaJugador) {
      setJugador((puntos) => puntos + 1);
      setResultado('R: JUGADOR');
    } else {
      setComputadora((puntos) => puntos + 1);
      setResultado('R: COMPUTADORA');
    }
  };

  const mostrarJugada = (jugada: Choice) => {
    switch (jugada) {
      case 'piedra':
        return '✊';
      case 'papel':
        return '✋';
      case 'tijeras':
        return '✌️';
    }
  };

  return (
    <SafeAreaView style={styles.container}>

      {/* Barra superior */}
      <View style={styles.header}>
        <Text style={styles.headerText}>PPT</Text>
      </View>

      {/* Contenido */}
      <View style={styles.content}>

        {/* Título */}
        <Text style={styles.title}>
          Piedra, Papel, Tijeras
        </Text>

        {/* Marcador */}
        <View style={styles.scoreContainer}>

          <View style={styles.scoreColumn}>
            <Text style={styles.scoreTitle}>
              Jugador
            </Text>

            <Text style={styles.score}>
              {jugador}
            </Text>
          </View>

          <View style={styles.scoreColumn}>
            <Text style={styles.scoreTitle}>
              Computadora
            </Text>

            <Text style={styles.score}>
              {computadora}
            </Text>
          </View>

        </View>

        {/* Jugada de la computadora */}
        <View style={styles.computerChoice}>
          <Text style={styles.hand}>
            {mostrarJugada(jugadaComputadora)}
          </Text>
        </View>

        {/* Opciones del jugador */}
        <View style={styles.options}>

          <TouchableOpacity
            style={styles.choiceButton}
            onPress={() => jugar('papel')}
          >
            <Text style={styles.hand}>
              ✋
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.choiceButton}
            onPress={() => jugar('tijeras')}
          >
            <Text style={styles.hand}>
              ✌️
            </Text>
          </TouchableOpacity>

        </View>

        {/* Resultado */}
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>
            {resultado}
          </Text>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  header: {
    height: 66,
    backgroundColor: '#5d3793',
    justifyContent: 'center',
    paddingHorizontal: 16,
    elevation: 4,
  },

  headerText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },

  content: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 18,
  },

  title: {
    fontSize: 22,
    color: '#222222',
    marginBottom: 24,
  },

  scoreContainer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 36,
  },

  scoreColumn: {
    width: '48%',
    alignItems: 'center',
  },

  scoreTitle: {
    fontSize: 14,
    color: '#777777',
    marginBottom: 10,
  },

  score: {
    width: '100%',
    textAlign: 'center',
    fontSize: 17,
    color: '#aaaaaa',
    borderBottomWidth: 1,
    borderBottomColor: '#bbbbbb',
    paddingBottom: 4,
  },

  computerChoice: {
    width: 140,
    height: 82,
    backgroundColor: '#d6d6d6',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    marginBottom: 12,
  },

  options: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  choiceButton: {
    width: '48%',
    height: 82,
    backgroundColor: '#d6d6d6',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },

  hand: {
    fontSize: 48,
  },

  resultContainer: {
    position: 'absolute',
    bottom: 24,
    backgroundColor: '#eeeeee',
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 25,
  },

  resultText: {
    fontSize: 13,
    color: '#222222',
  },
});