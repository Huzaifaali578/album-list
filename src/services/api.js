export const fetchAlbums = async (setAlbums, setError, setLoading  ) => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/albums");
      if (!response.ok) {
        throw new Error("Failed to fetch albums.");
      }
        const data = await response.json();
        console.log(data)
      setAlbums(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };