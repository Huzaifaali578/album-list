import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectEditList, updateAlbumAsync } from "../feature/Album/AlbumSlice.js";
import Navbar from "./Navbar.js";
import { Navigate } from "react-router-dom";

const EditList = () => {
    const dispatch = useDispatch();
    const edit = useSelector(selectEditList)   
  const [title, setTitle] = useState(edit.title);
  const [listUpdated, setListUpdated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      alert("Album title cannot be empty!");
      return;
    }

    // updated album object
      const updateAlbum = {
        id: edit.id,
      title,
      userId: edit.userId,
    };

    // dispatch the update album 
    dispatch(updateAlbumAsync(updateAlbum))

    // Reset the form
      setTitle("");
      setListUpdated(true)
    };
    
    const editForm = true

  return (
      <>
          {listUpdated && <Navigate to="/" replace={true} />}
          <Navbar editForm={editForm} />
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded shadow-md max-w-sm mx-auto mt-4"
    >
      <h2 className="text-xl font-bold mb-4 text-center">Update New Album</h2>
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
        Update Album
      </button>
      </form>
      </>
  );
};

export default EditList;
