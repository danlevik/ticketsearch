export const selectCartModule = (state) => state.cart;

export const selectFilmAmount = (state, id) => selectCartModule(state)[id] || 0;

export const selectAllAmount = (state) => {
  let amount = 0;
  const cart = selectCartModule(state);
  for (const key in cart) {
    if (Object.hasOwnProperty.call(cart, key)) {
      amount += cart[key];
    }
  }
  return amount;
};

export const selectFilmsInCart = (state) =>
  Object.keys(selectCartModule(state));
