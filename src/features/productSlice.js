import { createSlice } from "@reduxjs/toolkit";

const initalValue = [
  {
    id: 1,
    title: "Seeds",
    dec: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis error officia, non officiis perspiciatis vitae.",
    img: "https://images.pexels.com/photos/1737079/pexels-photo-1737079.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    title: "Fruits",
    dec: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis error officia, non officiis perspiciatis vitae.",
    img: "https://images.pexels.com/photos/4058752/pexels-photo-4058752.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    title: "Vegetables  ",
    dec: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis error officia, non officiis perspiciatis vitae.",
    img: "https://images.pexels.com/photos/4203056/pexels-photo-4203056.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    title: "Dairy/eggs",
    dec: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis error officia, non officiis perspiciatis vitae.",
    img: "https://images.pexels.com/photos/4045699/pexels-photo-4045699.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const productSlice = createSlice({
  name: "product",
  initialState: initalValue,
  reducers: {},
});

export const getAllProducts = (state) => state.products;

export default productSlice.reducer;
