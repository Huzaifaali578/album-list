import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAlbum, editedList, selectAlbums, selectError, selectLoading } from "../AlbumSlice";
import { Link } from "react-router-dom";

const AlbumList = () => {
  const albums = useSelector(selectAlbums);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch()

  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4 text-center">Album List</h1>
        <h1 className="text-2xl font-bold mb-4 text-center">Total Items in List:{albums.length}</h1>

        {loading && <p className="text-center text-blue-500">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        {!loading && !error && (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {albums.map((album) => (
              <li
                key={album.id}
                className="border p-4 rounded shadow hover:shadow-lg transition-shadow"
              >
                <h2 className="text-2xl font-semibold">{album.title}</h2>
                <p className="text-lg font-medium text-gray-500">Album ID: {album.id}</p>
                <div className="flex justify-between">
                  <Link
                    to="/edit-form"
                    onClick={()=>dispatch(editedList(album))}
                    className="w-1/2 bg-green-400 text-white py-1 rounded-lg hover:bg-green-600 transition text-center"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={()=>dispatch(deleteAlbum(album))}
                    className="w-1/2 bg-red-400 text-white py-1 rounded-lg hover:bg-red-600 transition text-center"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default AlbumList;
