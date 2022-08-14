import {
  ITEM_ADDED,
  REMOVE_ITEM,
  ITEM_PRICE_UPDATE,
  ITEM_QUANTITY_UPDATE
} from './actions';

let id = 1;

export const initialItems = [
  { uuid: id++, name: 'Tofu Roast', price: 14, quantity: 1 },
  { uuid: id++, name: 'Vegan Ham', price: 12, quantity: 1 }
];

export const reducer = (state = initialItems, action) => {
  if (action.type === ITEM_ADDED) {
    const item = { uuid: id++, quantity: 1, ...action.payload };
    return [...state, item];
  } else if (action.type === REMOVE_ITEM) {
    return state.filter((el) => el.uuid !== action.payload.uuid);
  } else if (action.type === ITEM_PRICE_UPDATE) {
    return state.map((item) =>
      item.uuid === action.payload.uuid
        ? { ...item, price: action.payload.price }
        : item
    );
  } else if (action.type === ITEM_QUANTITY_UPDATE) {
    return state.map((item) =>
      item.uuid === action.payload.uuid
        ? { ...item, quantity: action.payload.quantity }
        : item
    );
  } else {
    return state;
  }
};

export default reducer;
