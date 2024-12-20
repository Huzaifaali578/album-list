import { useDispatch } from 'react-redux';
import Home from './Pages/Home';
import { useEffect } from 'react';
import { fetchAlbumsAsync } from './feature/Album/AlbumSlice';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import EditList from './Pages/EditList';

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/edit-form", element: <EditList /> },
])

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAlbumsAsync())
  }, [dispatch])
  return (
    <>
      <RouterProvider router={router}>
        <Home />
      </RouterProvider>
    </>
  );
}

export default App;
