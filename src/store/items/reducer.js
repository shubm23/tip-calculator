import produce from 'immer';
import {
  ITEM_ADDED,
  REMOVE_ITEM,
  ITEM_PRICE_UPDATE,
  ITEM_QUANTITY_UPDATE
} from './actions';

var id = 1;

export const initialItems = [
  { uuid: id++, name: 'Tofu Roast', price: 14, quantity: 1 },
  { uuid: id++, name: 'Vegan Ham', price: 12, quantity: 1 }
];

export const reducer = produce((state = initialItems, action) => {
  if (action.type === ITEM_ADDED) {
    const item = { uuid: id++, quantity: 1, ...action.payload };
    state.push(item);
  } else if (action.type === REMOVE_ITEM) {
    return state.filter((el) => el.uuid !== action.payload.uuid);
  } else if (action.type === ITEM_PRICE_UPDATE) {
    const item = state.find((item) => item.uuid === action.payload.uuid);
    item.price = action.payload.price;
  } else if (action.type === ITEM_QUANTITY_UPDATE) {
    const item = state.find((item) => item.uuid === action.payload.uuid);
    item.quantity = action.payload.quantity;
  }
}, initialItems);

export default reducer;
