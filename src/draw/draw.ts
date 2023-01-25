import { Position } from "../game/useGameLogic";

interface DrawArgs {
  ctx: CanvasRenderingContext2D;
  snakeBody: Position[];
}

const SEGMENT_SIZE = 5;

const draw = ({ ctx, snakeBody }: DrawArgs) => {
  ctx.fillStyle = "rgb(200, 0, 0)";
  snakeBody.forEach((segment) =>
    ctx.fillRect(segment.x, segment.y, SEGMENT_SIZE, SEGMENT_SIZE)
  );
};

export default draw;
