import { useState } from 'react';

import { getComputerChoice, getResult } from '../game/gameLogic';
import { Choice, Result } from '../game/types';

export function useGame() {
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  const [result, setResult] = useState<Result>(null);

  const play = (playerChoice: Choice) => {
    // La computadora escoge en secreto
    const computerChoice = getComputerChoice();

    // Se comparan las elecciones
    const gameResult = getResult(
      playerChoice,
      computerChoice
    );

    // Guardamos únicamente el resultado
    setResult(gameResult);

    // Actualizamos el marcador
    if (gameResult === 'Ganaste') {
      setPlayerScore(score => score + 1);
    }

    if (gameResult === 'Perdiste') {
      setComputerScore(score => score + 1);
    }
  };

  return {
    playerScore,
    computerScore,
    result,
    play,
  };
}