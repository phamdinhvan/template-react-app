import { useEffect } from "react";
import { listener } from "../utils/other.util";

export function useDragHorizontal(ref: React.MutableRefObject<HTMLElement>) {
  //   const cbMemo = useCallback(() => {
  //     cb();
  //   }, [cb]);

  useEffect(() => {
    let removeMouseDown: Function;
    let removeMouseMove: Function;
    let removeMouseUp: Function;
    let removeMouseLeave: Function;

    let removeTouchStart: Function;
    let removeTouchMove: Function;
    let removeTouchEnd: Function;

    if (ref && ref.current) {
      const node = ref.current;
      let startX = 0;
      let scrollLeft = 0;

      removeMouseDown = listener(
        "mousedown",
        (e: MouseEvent) => {
          e.preventDefault();
          startX = e.pageX - node.offsetLeft;
          scrollLeft = node.scrollLeft;

          removeMouseMove = listener(
            "mousemove",
            (e: MouseEvent) => {
              e.preventDefault();
              node.classList.add("grab");
              const x: number = e.pageX - node.offsetLeft;
              const walk: number = x - startX;
              node.scrollLeft = scrollLeft - walk;
            },
            node
          );

          removeMouseUp = listener(
            "mouseup",
            (e: MouseEvent) => {
              e.stopPropagation();
              node.classList.remove("grab");

              removeMouseMove && removeMouseMove();
              removeMouseUp && removeMouseUp();
              removeMouseLeave && removeMouseLeave();
            },
            node
          );

          removeMouseLeave = listener(
            "mouseleave",
            (e: MouseEvent) => {
              e.stopPropagation();
              node.classList.remove("grab");

              removeMouseMove && removeMouseMove();
              removeMouseUp && removeMouseUp();
              removeMouseLeave && removeMouseLeave();
            },
            node
          );
        },
        node
      );

      removeTouchStart = listener(
        "touchstart",
        (e: any) => {
          e.preventDefault();
          startX = e.touches[0].pageX - node.offsetLeft;
          scrollLeft = node.scrollLeft;

          removeTouchMove = listener(
            "touchmove",
            (e: any) => {
              e.preventDefault();
              node.classList.add("grab");
              const x: number = e.touches[0].pageX - node.offsetLeft;
              const walk: number = x - startX;
              node.scrollLeft = scrollLeft - walk;
            },
            node
          );

          removeTouchEnd = listener(
            "touchend",
            (e: any) => {
              // e.stopPropagation();
              node.classList.remove("grab");

              removeTouchMove && removeTouchMove();
              removeTouchEnd && removeTouchEnd();
            },
            node
          );
        },
        node
      );
    }

    return () => {
      removeMouseDown && removeMouseDown();
      removeMouseMove && removeMouseMove();
      removeMouseUp && removeMouseUp();
      removeMouseLeave && removeMouseLeave();

      removeTouchStart && removeTouchStart();
      removeTouchMove && removeTouchMove();
      removeTouchEnd && removeTouchEnd();
    };
  }, [ref]);
}
