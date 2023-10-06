import { Typography } from '@mui/material';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Typography>xxx</Typography>,
        errorElement: <ErrorPage />
    }
])

function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;
