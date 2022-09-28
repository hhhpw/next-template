// https://segmentfault.com/a/1190000039806379
// https://codesandbox.io/s/xgs67?file=/src/user/slice.js
import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import walletReducer from "./wallet";

export const store = configureStore({
    reducer: {
        wallet: walletReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const wrapper = createWrapper(() => store);

