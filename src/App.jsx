import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import Subpage from "./routes/Subpage";
import './scss/App.scss'

function App() {
  // routes
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/subpage",
      element: <Subpage />
    },
  ]);

  return (
    <RouterProvider router={routes} />
  )
}

export default App;
