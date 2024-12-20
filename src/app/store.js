import { configureStore } from "@reduxjs/toolkit";
import albumReducer from "../feature/Album/AlbumSlice";

export const store = configureStore({
    reducer: {
        album: albumReducer
    }
})