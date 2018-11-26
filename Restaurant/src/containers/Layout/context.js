import React from 'react';

export default React.createContext({
  data: null,
  addProduct: argument => {},
  removeProduct: argument => {},
  price: null
});
