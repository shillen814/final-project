import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; //use as an html tag
import HomePage from "./HomePage";
import Resume from "./Resume";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/resume", element: <Resume /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
