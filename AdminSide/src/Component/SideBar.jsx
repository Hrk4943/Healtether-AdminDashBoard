import React from "react";
import { Link } from "react-router-dom";
import { FiHome, FiUser, FiUserPlus, FiUsers, FiFilePlus, FiSettings, FiLogOut } from 'react-icons/fi';
import Logo from '../assets/Logo.png'
import './SideBar.css'

const SideBar = () => {
  return (
    <div>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <span class="sr-only">Open sidebar</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar">
       
        <div class="h-full px-3 py-1 scroller overflow-y-auto bg-blue-500">
          <ul class="space-y-2 font-medium">
            <li className="py-10">
              <Link
              to={'/'}
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white ">
                    <img src={Logo} className="h-28" alt="" />
                {/* <span class="ml-3">Admin Panel</span> */}
              </Link>
            </li>
            <li className="py-1">
              <Link
              to={'/'}
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-blue-400">
                   <FiHome className="h-10" />
                <span class="flex-1 ml-3 whitespace-nowrap">Dashboard</span>
              </Link>
            </li>
            <li className="py-1">
              <Link
              to={'/admin/users'}
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-blue-400">
                     <FiUsers className="h-10" />
                <span class="flex-1 ml-3 whitespace-nowrap">Users</span>
              </Link>
            </li>
            <li className="py-1">
              <Link
              to={'/admin/doctors'}
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-blue-400">
                   <FiUserPlus className="h-10 rounded-full" />
                <span class="flex-1 ml-3 whitespace-nowrap">Doctors</span>
              </Link>
            </li>
            <li className="py-1">
              <Link
              to={'/admin/addDepartment'}
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-blue-400">
                    <FiFilePlus className="h-10 rounded-full" />
                <span class="flex-1 ml-3 whitespace-nowrap">Add Department</span>
              </Link>
            </li>

            <li className="py-1">
              <Link
              to={'/admin/departmentManagement'}
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-blue-400">
                    <FiSettings className="h-10 rounded-full" />
                <span class="flex-1 ml-3 whitespace-nowrap">Manage Department</span>
              </Link>
            </li>

            <li className="py-1">
              <Link
              to={'/admin/doctorVerification'}
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-blue-400">
                    <FiUser className="h-10 rounded-full" />
                <span class="flex-1 ml-3 whitespace-nowrap">Doctor Verification</span>
              </Link>
            </li>

            <li className="py-1">
              <Link
              onClick={()=>localStorage.clear()}
              to={'/'}
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-blue-400">
                    <FiLogOut className="h-10" />
                <span class="flex-1 ml-3 whitespace-nowrap">Logout</span>
              </Link>
            </li>
            
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default SideBar;
