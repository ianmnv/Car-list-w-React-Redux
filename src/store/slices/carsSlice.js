import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    cars: [],
    searchTerm: "",
  },
  reducers: {
    addCar(state, action) {
      state.cars.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    removeCar(state, action) {
      const updatedArr = state.cars.filter((car) => car.id !== action.payload);
      state.cars = updatedArr;
    },
    changeTerm(state, action) {
      state.searchTerm = action.payload;
    },
  },
});

export const { addCar, removeCar, changeTerm } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
