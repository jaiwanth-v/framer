import { v4 as uuid } from "uuid";
import { TOGGLE_EDIT, ADD_ITEM, SET_CURRENT, CHANGE_IMAGE_SRC } from "./types";

interface Action {
  type: string;
  payload: any;
}

interface Component {
  type: string;
  id: any;
  src?: any;
  value?: any;
  href?: any;
  list?: any;
}

interface AppState {
  edit: boolean;
  items: Array<Component>;
  activeId: typeof uuid | null;
}

const initialState: AppState = {
  edit: true,
  items: [],
  activeId: null,
};

export const reducer = (state = initialState, action: Action) => {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_EDIT:
      return { ...state, edit: !state.edit };
    case ADD_ITEM:
      state.items.push({ type: payload, id: uuid() });
      return { ...state };
    case SET_CURRENT:
      return state.activeId === payload
        ? state
        : { ...state, activeId: payload };
    case CHANGE_IMAGE_SRC:
      const newItems = state.items.map((item) =>
        item.id === payload.id ? { ...item, src: payload.src } : item
      );
      return { ...state, items: newItems };
    default:
      return state;
  }
};
