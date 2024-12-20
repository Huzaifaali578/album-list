export const fetchAlbums = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/albums");
      if (!response.ok) {
        throw new Error("Failed to fetch albums.");
      }
        const data = await response.json();
      resolve({data})
    } catch (err) {
      reject(err)
    }
  })
};
  
export const addAlbum = async (newAlbum) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/albums", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newAlbum),
      });
      const data = await response.json();
      resolve({data})
    } catch (err) {
      reject(err)
      console.error("Error adding album:", err);
    }
  })
};

export const updateAlbum = async (album) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/albums/"+ album.id, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(album),
      });
      const data = await response.json();
      resolve({data})
    } catch (err) {
      reject(err)
      console.error("Error updating album:", err);
    }
  })
};
