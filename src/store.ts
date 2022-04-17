import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Action } from 'history';
import { idText } from 'typescript';

type Hook = {
  id?: number;
  title: string;
  body: string;
  description?: string;
};

interface HookSliceState {
  hooks: Hook[];
}

const initialState: HookSliceState = {
  hooks: [
    {
      id: 1,
      title: 'useHello',
      body: `const useHello = () => console.log('Ola Mundo')`
    },
    {
      id: 2,
      title: 'useRef',
      body: `import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

function App() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));`
    }
  ]
};

let initialId: number = 2;

export const hookSlice = createSlice({
  name: 'hooks',
  initialState,
  reducers: {
    addHook: (state, action: PayloadAction<Hook>) => {
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
    },
    editHook: (state, action: PayloadAction<Hook>) => {
      let hookToEdit = state.hooks.filter(({ id }) => id === action.payload.id);
      const { id, title, body } = action.payload;
      state.hooks = [...state.hooks, { ...hookToEdit, id, title, body }];
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
