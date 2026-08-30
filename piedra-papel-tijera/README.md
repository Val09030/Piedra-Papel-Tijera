# Piedra, Papel, Tijeras

Aplicación móvil desarrollada con React Native + Expo para jugar al clásico juego de piedra, papel y tijeras.

## Descripción

La app permite:

- elegir entre piedra, papel o tijeras
- generar una elección aleatoria de la computadora
- comparar jugadas y determinar el ganador
- actualizar el marcador del jugador y la computadora
- mostrar el resultado de cada ronda

La lógica principal del juego está separada por capas para mantener el proyecto ordenado y fácil de extender.

## Stack tecnológico

- React Native
- Expo
- Expo Router
- TypeScript

## Estructura del proyecto

```text
piedra-papel-tijera/
├── app.json
├── package.json
├── tsconfig.json
├── README.md
├── assets/
│   └── images/
│       ├── piedra.jpg
│       ├── papel.jpg
│       ├── tijeras.jpg
│       └── ...
├── src/
│   ├── app/
│   │   ├── _layout.tsx
│   │   └── index.tsx
│   ├── components/
│   │   ├── ChoiceButtons.tsx
│   │   ├── Header.tsx
│   │   ├── ResultDisplay.tsx
│   │   └── ScoreBoard.tsx
│   ├── game/
│   │   ├── choices.ts
│   │   ├── gameLogic.ts
│   │   └── types.ts
│   ├── hooks/
│   │   └── useGame.ts
│   └── ...
└── scripts/
    └── reset-project.js
```

## Componentes principales

### Pantalla principal

- [src/app/index.tsx](src/app/index.tsx): pantalla principal del juego, donde se arma la interfaz y se conectan los componentes.

### Juego

- [src/game/gameLogic.ts](src/game/gameLogic.ts): lógica para elegir la jugada de la computadora y decidir el ganador.
- [src/game/types.ts](src/game/types.ts): tipos TypeScript para las opciones y resultados.
- [src/game/choices.ts](src/game/choices.ts): mapeo entre cada opción y su imagen asociada.

### Estado

- [src/hooks/useGame.ts](src/hooks/useGame.ts): hook que controla el marcador y el resultado de cada partida.

### UI

- [src/components/Header.tsx](src/components/Header.tsx): cabecera de la app.
- [src/components/ScoreBoard.tsx](src/components/ScoreBoard.tsx): mostrador de puntos del jugador y la computadora.
- [src/components/ChoiceButtons.tsx](src/components/ChoiceButtons.tsx): botones con las imágenes de piedra, papel y tijeras.
- [src/components/ResultDisplay.tsx](src/components/ResultDisplay.tsx): muestra si el usuario ganó, perdió o empató.

## Flujo del juego

1. El usuario elige una jugada.
2. La computadora elige aleatoriamente una opción.
3. Se compara la elección del jugador con la de la computadora.
4. Se actualiza el marcador.
5. Se muestra el resultado final de la ronda.

## Requisitos

- Node.js 18+
- npm o yarn
- Expo CLI
- Android Studio / iOS Simulator o Expo Go para ejecutar la app en un dispositivo

## Instalación

```bash
npm install
```

## Ejecución

Iniciar la app en modo desarrollo:

```bash
npm start
```

## Funcionalidades actuales

- Marcador de puntos
- Elección aleatoria de la computadora
- Resultado por ronda
- Interfaz simple y responsiva
- Uso de imágenes para cada opción

## Autor

Valeria Berenice Castellanos Murillo

