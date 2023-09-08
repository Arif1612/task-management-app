import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Home from "./Pages/Home/Home/Home";
import AuthProvider from "./providers/AuthProvider";
import Profile from "./Pages/Home/Profile/Profile";
import Task from "./Pages/Task/Task/Task";
import TaskForm from "./Pages/Task/TaskForm/TaskForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path:'/',
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/profile",
        element:<Profile></Profile>,
      },
    ],
  },
  {
    path: "/task",
    element: <Task></Task>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path:'task-form',
        element: <TaskForm></TaskForm>,
      },
    
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);