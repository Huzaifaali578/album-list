import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addAlbum, fetchAlbums, updateAlbum } from "./AlbumAPI";

const initialState = {
  albums: [],
  loading: true,
  error: null,
    status: "idle",
    editList: null
};

export const fetchAlbumsAsync = createAsyncThunk(
  "album/fetchAlbums",
  async () => {
    const response = await fetchAlbums();
    return response.data;
  }
);

export const addAlbumAsync = createAsyncThunk(
  "album/addAlbum",
  async (newAlbum) => {
    const response = await addAlbum(newAlbum);
    return response.data;
  }
);

export const updateAlbumAsync = createAsyncThunk(
  "album/updateAlbum",
  async (album) => {
      const response = await updateAlbum(album);
    return response.data;
  }
);

export const albumSlice = createSlice({
  name: "album",
  initialState,
    reducers: {
        editedList: (state, action) => {
            state.editList = action.payload;
        },
        deleteAlbum: (state, action) => {
            const index = state.albums.findIndex((li) => li.id === action.payload.id)
            if (index !== -1) {
                state.albums.splice(index, 1)
            }
        }
  },
  extraReducers: (builder) => {
      builder
          .addCase(fetchAlbumsAsync.pending, (state, action) => {
              state.status = "loading";
          })
          .addCase(fetchAlbumsAsync.fulfilled, (state, action) => {
              state.status = "idle";
              state.albums = action.payload
              state.loading = false
          })
          .addCase(fetchAlbumsAsync.rejected, (state, action) => {
              state.status = "failed";
              state.error = "Data not Fetched"
          })
          .addCase(addAlbumAsync.pending, (state, action) => {
              state.status = "loading";
          })
          .addCase(addAlbumAsync.fulfilled, (state, action) => {
              state.status = "idle";
              state.albums.push(action.payload)
              state.loading = false
          })
          .addCase(updateAlbumAsync.pending, (state, action) => {
              state.status = "loading";
          })
          .addCase(updateAlbumAsync.fulfilled, (state, action) => {
              state.status = "idle";
              const index = state.albums.findIndex((li) => li.id === action.payload.id)
              state.albums[index] = action.payload
              state.loading = false
          });
  },
});

export const selectAlbums = (state) => state.album.albums;
export const selectLoading = (state) => state.album.loading;
export const selectError = (state) => state.album.error;
export const selectEditList = (state) => state.album.editList;
export const { editedList, deleteAlbum } = albumSlice.actions;

const albumReducer = albumSlice.reducer;
export default albumReducer;
