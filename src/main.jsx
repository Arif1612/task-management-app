import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Home from "./Pages/Home/Home/Home";
import AuthProvider from "./providers/AuthProvider";
import Profile from "./Pages/Home/Profile/Profile";
import Main from "./Pages/Layout/Main";
import AddATask from "./Pages/Task/AddATask/AddATask";
import TaskDashboard from "./Pages/Layout/TaskDashboard";
import TaskList from "./Pages/Task/TaskList/TaskList";
import Task from "./Pages/Task/Task/Task";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
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
    element: <TaskDashboard></TaskDashboard>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path:'',
        element: <Task></Task>,
      },
      // {
      //   path:'add-a-task',
      //   element: <AddATask></AddATask> ,
      // },
      {
        path:'task-list',
        element: <TaskList></TaskList>  ,
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