import { configureStore } from "@reduxjs/toolkit";
import { todoApi } from "./apis/todoapi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { songSlice } from "./slices/Songslice";

export const store = configureStore({
    reducer: {
        [todoApi.reducerPath]:todoApi.reducer,
        [songSlice.name]:songSlice.reducer
    },
    middleware:(getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(todoApi.middleware);
    }
})

setupListeners(store.dispatch);
console.log(store.getState());