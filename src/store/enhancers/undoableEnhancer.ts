import { Reducer, AnyAction, createAction } from '@reduxjs/toolkit';

export const undo = createAction('UNDO');
export const redo = createAction('REDO');

export function undoable<T>(reducer: Reducer<T, AnyAction>) {
  const initialState = {
    past: [] as Array<T>,
    present: reducer(undefined, {} as AnyAction),
    future: [] as Array<T>,
  };

  return function (state = initialState, action: any) {
    const { past, present, future } = state;

    switch (action.type) {
      case undo.type: {
        const previous = past[past.length - 1];

        if (!previous) {
          return state;
        }

        const newPast = past.slice(0, past.length - 1);

        return {
          past: newPast,
          present: previous,
          future: [present, ...future],
        };
      }
      case redo.type: {
        const next = future[0];

        if (!next) {
          return state;
        }

        const newFuture = future.slice(1);

        return {
          past: [...past, present],
          present: next,
          future: newFuture,
        };
      }

      default: {
        const newPresent = reducer(present, action);

        if (present === newPresent) {
          return state;
        }

        return {
          past: [...past, present],
          present: newPresent,
          future: [],
        };
      }
    }
  };
}
