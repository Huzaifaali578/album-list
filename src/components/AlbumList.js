import React, { useState, useEffect } from "react";
import { fetchAlbums } from "../services/api";

const AlbumList = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch albums from API
  useEffect(() => {
    fetchAlbums(setAlbums, setError, setLoading);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Album List</h1>

      {loading && <p className="text-center text-blue-500">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {!loading && !error && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {albums.map((album) => (
            <li
              key={album.id}
              className="border p-4 rounded shadow hover:shadow-lg transition-shadow"
            >
              <h2 className="text-lg font-semibold">{album.title}</h2>
              <p className="text-sm text-gray-500">Album ID: {album.id}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AlbumList;
