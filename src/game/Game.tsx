import React, { useRef } from "react";
import Canvas from "../canvas/Canvas";
import { GameWrapper } from "./Game.styles";

interface GameProps {}

const Game: React.FC<GameProps> = ({}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const draw = (ctx: CanvasRenderingContext2D) => {};

  return (
    <GameWrapper>
      <Canvas draw={draw} ref={canvasRef} />
    </GameWrapper>
  );
};

export default Game;
