import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../../store';
import type { Board } from '../../types/Board';
import type { Card } from '../../types/Card';

type BoardsState = Board[];

const initialState: BoardsState = [
  {
    id: 'board-default-1',
    title: 'Doing',
    items: [
      { id: 'item-default-1', title: 'Work my ass off' },
      { id: 'item-default-2', title: 'Cook a dish' },
      { id: 'item-default-3', title: 'Ripping my hair out' },
    ],
  },
  {
    id: 'board-default-2',
    title: 'Done',
    items: [
      { id: 'item-default-11', title: 'Workout' },
      {
        id: 'item-default-21',
        title: 'Send my awful trello to Yuriy for a review',
      },
    ],
  },
];

const boardsSlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {
    addCard: {
      reducer: (
        state,
        { payload }: PayloadAction<{ boardId: string; card: Card }>
      ) => {
        const board = state.find((board) => board.id === payload.boardId);

        if (!board) {
          return;
        }

        board.items.push(payload.card);
      },
      prepare: (boardId: string, { title }: Omit<Card, 'id'>) => {
        return {
          payload: {
            boardId,
            card: {
              id: nanoid(),
              title,
            },
          },
        };
      },
    },
    updateCard: (
      state,
      {
        payload,
      }: PayloadAction<{
        boardId: string;
        cardId: string;
        attrs: Partial<Card>;
      }>
    ) => {
      const board = state.find((board) => board.id === payload.boardId);

      if (!board) {
        return;
      }

      const card = board.items.find((card) => card.id === payload.cardId);

      if (!card) {
        return;
      }

      Object.assign(card, payload.attrs);
    },
    deleteCard: (
      state,
      { payload }: PayloadAction<{ boardId: string; cardId: string }>
    ) => {
      const board = state.find((board) => board.id === payload.boardId);

      if (!board) {
        return;
      }

      board.items = board.items.filter((card) => card.id !== payload.cardId);
    },
    swapCards: (
      state,
      action: PayloadAction<{
        currentBoardId: string;
        targetBoardId: string;
        currentCardId: string;
        currentCardIndex: number;
        neighbourCardIndex: number;
      }>
    ) => {
      const {
        currentBoardId,
        targetBoardId,
        currentCardId,
        currentCardIndex,
        neighbourCardIndex,
      } = action.payload;

      const currentBoard = state.find((board) => board.id === currentBoardId);
      const targetBoard = state.find((board) => board.id === targetBoardId);

      if (!currentBoard || !targetBoard) {
        return;
      }

      const currentCard = currentBoard.items.find(
        (card) => card.id === currentCardId
      );

      if (!currentCard) {
        return;
      }

      currentBoard.items.splice(currentCardIndex, 1);
      targetBoard.items.splice(neighbourCardIndex + 1, 0, currentCard);
    },
    addBoard: {
      reducer: (state, { payload }: PayloadAction<{ board: Board }>) => {
        state.push(payload.board);
      },
      prepare: ({ title }: Pick<Board, 'title'>) => {
        return {
          payload: {
            board: {
              id: nanoid(),
              title,
              items: [],
            },
          },
        };
      },
    },
  },
});

export const { addCard, addBoard, updateCard, deleteCard, swapCards } =
  boardsSlice.actions;

export const selectAllBoards = (state: RootState) => state.boards;

export default boardsSlice.reducer;
