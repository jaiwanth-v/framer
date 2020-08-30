import { v4 as uuid } from "uuid";
import { TOGGLE_EDIT, ADD_ITEM } from "./types";

interface Action {
  type: string;
  payload: any;
}

interface Component {
  type: string;
  id: any;
}

interface AppState {
  edit: boolean;
  items: Array<Component>;
}

const initialState: AppState = {
  edit: true,
  items: [],
};

export const reducer = (state = initialState, action: Action) => {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_EDIT:
      return { ...state, edit: !state.edit };
    case ADD_ITEM:
      state.items.push({ type: payload, id: uuid() });
      return { ...state };
    default:
      return state;
  }
};
