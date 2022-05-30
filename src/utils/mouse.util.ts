import { Direction } from "../models/other.model";

// global variable
let xCoord: number, yCoord: number;

let xDirection = "";
let yDirection = "";
let oldX = 0;
let oldY = 0;

class Mouse {
  detectRightClick(e: any) {
    if (e.which === 3 || e.button === 2) return true;
    return false;
  }
  validateClick(props: { onClick: (e: any) => void; onMouseDown?: (e: any) => void }) {
    const start = function (e: any) {
      xCoord = e.pageX;
      yCoord = e.pageY;

      props.onMouseDown && props.onMouseDown(e);
    };

    const click = function (e: any) {
      const isMoveX = Math.abs(e.pageX - xCoord) <= 5;
      const isMoveY = Math.abs(e.pageY - yCoord) <= 5;
      if (isMoveX && isMoveY) {
        props.onClick(e);
      }
    };
    return { onMouseDown: start, onClick: click };
  }
  validateTouch(props: { onTouchEnd: (e: any) => void; onTouchStart?: (e: any) => void }) {
    const start = function (e: any) {
      xCoord = e.touches[0].pageX;
      yCoord = e.touches[0].pageY;

      props.onTouchStart && props.onTouchStart(e);
    };

    const click = function (e: any) {
      const isMoveX = Math.abs(e.changedTouches[0].pageX - xCoord) <= 5;
      const isMoveY = Math.abs(e.changedTouches[0].pageY - yCoord) <= 5;

      if (isMoveX && isMoveY) {
        props.onTouchEnd(e);
      }
    };
    return { onTouchStart: start, onTouchEnd: click };
  }
  getDirection(e: React.MouseEvent<HTMLElement>): { xDirection: string; yDirection: string } {
    //deal with the horizontal case
    if (oldX < e.pageX) {
      xDirection = Direction.RIGHT;
    } else {
      xDirection = Direction.LEFT;
    }

    //deal with the vertical case
    if (oldY < e.pageY) {
      yDirection = Direction.DOWN;
    } else {
      yDirection = Direction.UP;
    }

    oldX = e.pageX;
    oldY = e.pageY;

    return { xDirection, yDirection };
  }
}

export const MouseUtil = new Mouse();
