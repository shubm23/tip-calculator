export const ITEM_ADDED = 'ITEM_ADDED';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const ITEM_PRICE_UPDATE = 'ITEM_PRICE_UPDATE';
export const ITEM_QUANTITY_UPDATE = 'ITEM_QUANTITY_UPDATE';

export const addNewItem = (name, price) => ({
  type: ITEM_ADDED,
  payload: {
    name,
    price
  }
});

export const removeItem = (uuid) => ({
  type: REMOVE_ITEM,
  payload: {
    uuid
  }
});

export const updatePrice = (uuid, price) => ({
  type: ITEM_PRICE_UPDATE,
  payload: {
    uuid,
    price
  }
});

export const updateQuantity = (uuid, quantity) => ({
  type: ITEM_QUANTITY_UPDATE,
  payload: {
    uuid,
    quantity
  }
});
