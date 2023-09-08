import { Link, Outlet } from "react-router-dom";
import logo from "../../assets/task-management-logo.jpg";

import {
    FaHome,
  } from "react-icons/fa";

 import {AiFillFileAdd,AiOutlineOrderedList}  from "react-icons/ai"
import { CgProfile} from "react-icons/cg";

const TaskDashboard = () => {
 
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <div className="w-full">
            <Outlet></Outlet>
          </div>

          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary my-10 drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-6 w-full mx-3 h-full bg-gray-300  text-base-content">
            {/* Sidebar content here */}

            {/* title */}
            <li>
              <Link
                className="flex justify-center items-center text-2xl font-bold p-3  rounded hover:bg-gray-500 hover:text-white"
                to="/task"
              >
                <img
                  className=" rounded-full"
                  width="60px"
                  height="30px"
                  src={logo}
                  alt=""
                />

                <h3 className="ml-1">Task Management App</h3>
              </Link>
            </li>

            {/* title end */}

            {/* divider */}
            <div className="divider  "></div>

       
              <>
           
                {/* <li>
                  <Link
                    to="/task/add-a-task"
                    className="hover:bg-gray-500 hover:text-white rounded  text-base"
                  >
                    <AiFillFileAdd></AiFillFileAdd> Add A Task
                  </Link>
                </li> */}

                <li>
                  <Link
                    to="/task/task-list"
                    className="hover:bg-gray-500 hover:text-white rounded  text-base"
                  >
                  <AiOutlineOrderedList></AiOutlineOrderedList> Task List
                  </Link>
                </li>
              </>
         

            {/* divider */}
            <div className="divider"></div>

            <li>
              <Link
                to="/"
                className="hover:bg-gray-500 hover:text-white rounded  text-base"
              >
                <FaHome /> Home
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className="hover:bg-gray-500 hover:text-white rounded text-base  "
              >
               <CgProfile></CgProfile> Profile
              </Link>
            </li>
          
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TaskDashboard;
