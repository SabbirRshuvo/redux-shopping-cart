import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "casual shirt",
    price: 100,
    category: "gadgets",
    image:
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "smart watch",
    price: 200,
    category: "gadgets",
    image:
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 3,
    name: "bed room",
    price: 100,
    category: "gadgets",
    image:
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVkJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
  },
];

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: (state, action) => {
      state.push({
        id: state.length > 0 ? state[state.length - 1].id : 1,
        ...action.payload,
      });
    },
  },
});

export const { addProducts } = productSlice.actions;
export default productSlice.reducer;
