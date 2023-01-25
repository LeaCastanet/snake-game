import React, { useRef } from "react";
import Canvas from "../canvas/Canvas";
import { GameWrapper } from "./Game.styles";
import useGameLogic from "./useGameLogic";
import draw from "../draw/draw";

interface GameProps {}

const Game: React.FC<GameProps> = ({}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const { snakeBody, onKeyDownHandler } = useGameLogic();

  const drawGame = (ctx: CanvasRenderingContext2D) => {
    draw({ ctx, snakeBody });
  };

  return (
    <GameWrapper tabIndex={0} onKeyDown={onKeyDownHandler}>
      <Canvas ref={canvasRef} draw={drawGame} />
    </GameWrapper>
  );
};

export default Game;
