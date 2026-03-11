"use client";

import React, {
  createContext,
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
} from "react";
import confetti from "canvas-confetti";
import type {
  GlobalOptions as ConfettiGlobalOptions,
  Options as ConfettiOptions,
  CreateTypes as ConfettiInstance,
} from "canvas-confetti";

type ConfettiContextType = {
  fire: (options?: ConfettiOptions) => void;
};

const ConfettiContext = createContext<ConfettiContextType>({
  fire: () => {},
});

export type ConfettiRef = {
  fire: (options?: ConfettiOptions) => void;
};

type ConfettiProps = React.ComponentPropsWithRef<"canvas"> & {
  options?: ConfettiGlobalOptions;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

export const Confetti = forwardRef<ConfettiRef, ConfettiProps>(
  (props, ref) => {
    const { options, onMouseEnter, onMouseLeave, ...rest } = props;
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const confettiInstanceRef = useRef<ConfettiInstance | null>(null);

    const fire = useCallback((opts?: ConfettiOptions) => {
      if (confettiInstanceRef.current) {
        confettiInstanceRef.current(opts);
      }
    }, []);

    useImperativeHandle(ref, () => ({
      fire,
    }));

    useEffect(() => {
      if (canvasRef.current && !confettiInstanceRef.current) {
        confettiInstanceRef.current = confetti.create(canvasRef.current, {
          ...options,
          resize: true,
        });
      }
      return () => {
        confettiInstanceRef.current = null;
      };
    }, [options]);

    return (
      <ConfettiContext.Provider value={{ fire }}>
        <canvas
          ref={canvasRef}
          {...rest}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      </ConfettiContext.Provider>
    );
  }
);

Confetti.displayName = "Confetti";
