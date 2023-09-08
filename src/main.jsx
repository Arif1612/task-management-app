import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
import TeamDashboard from "./Pages/Layout/TeamDashboard";
import Team from "./Pages/Team/Team/Team";
import TeamCreationForm from "./Pages/Team/TeamCreationForm/TeamCreationForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
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
        element: <Profile></Profile>,
      },
    ],
  },

   // task
   {
    path: "/task",
    element: <TaskDashboard></TaskDashboard>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "",
        element: <Task></Task>,
      },
      // {
      //   path:'add-a-task',
      //   element: <AddATask></AddATask> ,
      // },
      {
        path: "task-list",
        element: <TaskList></TaskList>,
      },
    ],
  },

  // team
  {
    path: "/team",
    element: <TeamDashboard></TeamDashboard>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "",
        element: <Team></Team> ,
      },
       {
        path:'team-creation-form',
        element: <TeamCreationForm></TeamCreationForm> ,
      },
      {
        path: "task-list",
        element: <TaskList></TaskList>,
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
