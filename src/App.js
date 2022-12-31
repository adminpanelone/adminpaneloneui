import './App.css';
import React from 'react';
import Root from './routes/root';
import ErrorPage from './views/error-page';
import SignUp from './views/SignUp';
// import ReactDOM from "react-dom/client";
// import Button from '@mui/material/Button';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
]);

function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </div>
  );
}

export default App;
