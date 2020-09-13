import { v4 as uuid } from "uuid";
import {
  TOGGLE_EDIT,
  ADD_ITEM,
  SET_CURRENT,
  CHANGE_IMAGE_SRC,
  CHANGE_BUTTON_VAL,
  DELETE_COMPONENT,
  CHANGE_HEADING_VAL,
  CHANGE_TEXT_VAL,
  CHANGE_LINK,
  CHANGE_PARAGRAPH_VAL,
} from "./types";

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
      let newItems = state.items.map((item) =>
        item.id === payload.id ? { ...item, src: payload.src } : item
      );
      return { ...state, items: newItems };
    case CHANGE_BUTTON_VAL:
      let newItemsForButton = state.items.map((item) =>
        item.id === payload.id ? { ...item, value: payload.value } : item
      );
      return { ...state, items: newItemsForButton };
    case DELETE_COMPONENT:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== payload.id),
      };
    case CHANGE_HEADING_VAL:
      let newItemsForHeading = state.items.map((item) =>
        item.id === payload.id ? { ...item, value: payload.value } : item
      );
      return { ...state, items: newItemsForHeading };
    case CHANGE_TEXT_VAL:
      let newItemsForText = state.items.map((item) =>
        item.id === payload.id ? { ...item, value: payload.value } : item
      );
      return { ...state, items: newItemsForText };
    case CHANGE_PARAGRAPH_VAL:
      let newItemsForParagraph = state.items.map((item) =>
        item.id === payload.id ? { ...item, value: payload.value } : item
      );
      return { ...state, items: newItemsForParagraph };
    case CHANGE_LINK:
      let newItemsForLink = state.items.map((item) =>
        item.id === payload.id ? { ...item, value: payload.href } : item
      );
      return { ...state, items: newItemsForLink };

    default:
      return state;
  }
};
