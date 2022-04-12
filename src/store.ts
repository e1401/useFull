import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Hook {
  id: number;
  title: string;
  body: string;
}

interface HookSliceState {
  hooks: Hook[];
}

const initialState: HookSliceState = {
  hooks: [
    {
      id: 1,
      title: 'useHello',
      body: `const useHello = () => console.log('Ola Mundo')`
    }
  ]
};

let initialId: number = 1;

export const hookSlice = createSlice({
  name: 'hooks',
  initialState,
  reducers: {
    addHook: (state, action: PayloadAction<any>) => {
      state.hooks = [
        ...state.hooks,
        {
          id: ++initialId,
          title: action.payload.title,
          body: action.payload.body
        }
      ];
    },
    removeHook: (state, action: PayloadAction<number>) => {
      state.hooks = state.hooks.filter(({ id }) => id !== action.payload);
    }
  }
});

export const { addHook, removeHook } = hookSlice.actions;

const store = configureStore({
  reducer: {
    hooks: hookSlice.reducer
  }
});

type RootState = ReturnType<typeof store.getState>;
export const selectHooks = (state: RootState) => state.hooks.hooks;

export default store;
