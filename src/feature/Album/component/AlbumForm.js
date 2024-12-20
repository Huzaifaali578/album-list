import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAlbumAsync, selectAlbums } from "../AlbumSlice";

const AlbumForm = () => {
  const dispatch = useDispatch();
  const albums = useSelector(selectAlbums);
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      alert("Album title cannot be empty!");
      return;
    }

    // Create a new album object
    const newAlbum = {
      title,
      userId: albums.length + 1,
    };

    // dispatch the new album 
    dispatch(addAlbumAsync(newAlbum))

    // Reset the form
    setTitle("");
    alert("Album Added Successfully")
  };

  return (
    <>
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded shadow-md max-w-sm mx-auto mt-4"
    >
      <h2 className="text-xl font-bold mb-4 text-center">Add New Album</h2>
      <div className="mb-4">
        <label
          htmlFor="title"
          className="block text-gray-700 font-semibold mb-2"
        >
          Album Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter album title"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
      >
        Add Album
      </button>
      </form>
      </>
  );
};

export default AlbumForm;
