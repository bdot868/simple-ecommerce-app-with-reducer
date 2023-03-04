export function qtyReducer(state, action) {
  const newState = [...state];
  const idx = newState.findIndex(({ productId }) => productId === action.id);

  // console.log(state);
  // console.log(action);
  switch (action.type) {
    case "increment_qty":
      let addQty = newState[idx].qty + 1;
      let addObj = Object.assign({}, newState[idx]);
      addObj.qty = addQty;
      let addedProducts = Object.assign([], newState);
      addedProducts.splice(idx, 1, addObj);
      return [...addedProducts];
    case "decrement_qty":
      // console.log(newState[idx]);
      if (newState[idx].qty === 0) {
        return [...newState];
      }
      let qty = newState[idx].qty - 1;
      let obj = Object.assign({}, newState[idx]);
      obj.qty = qty;
      let products = Object.assign([], newState);
      products.splice(idx, 1, obj);
      return [...products];
    case "delete":
      newState.splice(action.id, 1);
      return [...newState];
    default:
      return [...newState];
  }
}
