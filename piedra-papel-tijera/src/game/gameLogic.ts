import { Choice, Result } from './types';

export function getComputerChoice(): Choice {
  const choices: Choice[] = [
    'piedra',
    'papel',
    'tijeras',
  ];

  const randomIndex = Math.floor(
    Math.random() * choices.length
  );

  return choices[randomIndex];
}

export function getResult(
  player: Choice,
  computer: Choice
): Result {

  if (player === computer) {
    return 'empate';
  }

  if (
    (player === 'piedra' && computer === 'tijeras') ||
    (player === 'papel' && computer === 'piedra') ||
    (player === 'tijeras' && computer === 'papel')
  ) {
    return 'Ganaste';
  }

  return 'Perdiste';
}