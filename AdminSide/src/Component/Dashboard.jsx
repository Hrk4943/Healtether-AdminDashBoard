import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const Dashboard = () => {
  const [dashboardCount, setDashboardCount] = useState({});
  const [appointmentGraph, setAppointmentGraph] = useState([]);

  useEffect(() => {
    const mockDashboardCount = {
      activeDoctors: 2,
      blockedDoctors: 2,
      activeUsers: 5,
      blockedUsers: 2,
      successfulAppointments: 10,
      cancelledAppointments: 5,
      verifiedDoctors: 1,
      unVerifiedDoctors: 1,
      totalRevenue: 5000,
    };
    setDashboardCount(mockDashboardCount);

    const mockAppointmentGraph = [10, 12, 8, 15, 20, 30, 25, 18, 12, 16, 22];
    setAppointmentGraph(mockAppointmentGraph);
  }, []);

  const state = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [
          "January",
          "February",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
      },
    },
    series: [
      {
        name: "series-1",
        data: appointmentGraph,
      },
    ],
  };

  return (
    <div class="p-4 sm:ml-64">
      <div class="container my-12 mx-auto px-4 md:px-12">
        <div class="flex flex-wrap -mx-1 lg:-mx-4">
          <div class="my-1 px-1 w-full md:w-1/2 sm:w-1/3 lg:my-4 lg:px-4 lg:w-1/4 cursor-pointer ease-in-out duration-200">
            <article class="overflow-hidden rounded-lg shadow-lg bg-white hover:bg-blue-50 hover:scale-105 ease-in-out duration-200 h-[auto]">
              <div className="flex items-center justify-center leading-tight p-2 md:p-4"></div>

              <header class="flex items-center justify-center leading-tight">
                <h1 class="text-lg">
                  <p class="no-underline text-black">Active Doctors</p>
                </h1>
              </header>

              <div class="flex items-center justify-center  text-gray-500 text-center leading-tight p-2 md:p-4">
                <p className="text-cyan-600 font-bold text-xl">
                  {dashboardCount.activeDoctors}
                </p>
              </div>
            </article>
          </div>

          <div class="my-1 px-1 w-full md:w-1/2 sm:w-1/3 lg:my-4 lg:px-4 lg:w-1/4 cursor-pointer  ease-in-out duration-200">
            <article class="overflow-hidden rounded-lg shadow-lg bg-white hover:bg-blue-50 hover:scale-105 ease-in-out duration-200 h-[auto]">
              <div className="flex items-center justify-center leading-tight p-2 md:p-4"></div>

              <header class="flex items-center justify-center leading-tight">
                <h1 class="text-lg">
                  <p class="no-underline text-black">Blocked Doctors</p>
                </h1>
              </header>

              <div class="flex items-center justify-center  text-gray-500 text-center leading-tight p-2 md:p-4">
                <p className="text-red-600 font-bold text-xl">
                  {dashboardCount.blockedDoctors}
                </p>
              </div>
            </article>
          </div>

          <div class="my-1 px-1 w-full md:w-1/2 sm:w-1/3 lg:my-4 lg:px-4 lg:w-1/4 cursor-pointer ease-in-out duration-200">
            <article class="overflow-hidden rounded-lg shadow-lg bg-white hover:bg-blue-50 hover:scale-105 ease-in-out duration-200 h-[auto]">
              <div className="flex items-center justify-center leading-tight p-2 md:p-4">
                <div></div>
              </div>

              <header class="flex items-center justify-center leading-tight">
                <h1 class="text-lg">
                  <p class="no-underline text-black">Active Users</p>
                </h1>
              </header>

              <div class="flex items-center justify-center  text-gray-500 text-center leading-tight p-2 md:p-4">
                <p className="text-cyan-600 font-bold text-xl">
                  {dashboardCount.activeUsers}
                </p>
              </div>
            </article>
          </div>

          <div class="my-1 px-1 w-full md:w-1/2 sm:w-1/3 lg:my-4 lg:px-4 lg:w-1/4 cursor-pointer ease-in-out duration-200">
            <article class="overflow-hidden rounded-lg shadow-lg bg-white hover:bg-blue-50 hover:scale-105 ease-in-out duration-200 h-[auto]">
              <div className="flex items-center justify-center leading-tight p-2 md:p-4">
                <a href="#"></a>
              </div>

              <header class="flex items-center justify-center leading-tight">
                <h1 class="text-lg">
                  <p class="no-underline text-black">Blocked Users</p>
                </h1>
              </header>

              <div class="flex items-center justify-center  text-gray-500 text-center leading-tight p-2 md:p-4">
                <p className="text-red-600 font-bold text-xl">
                  {dashboardCount.blockedUsers}
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>

      <div class="container my-12 mx-auto px-4 md:px-12">
        <div class="flex flex-wrap -mx-1 lg:-mx-4">
          <div class="my-1 px-1 w-full md:w-1/2 sm:w-1/3 lg:my-4 lg:px-4 lg:w-1/4 cursor-pointer ease-in-out duration-200">
            <article class="overflow-hidden rounded-lg shadow-lg bg-white hover:bg-blue-50 hover:scale-105 ease-in-out duration-200 h-[auto]">
              <div className="flex items-center justify-center leading-tight p-2 md:p-4"></div>

              <header class="flex items-center justify-center leading-tight">
                <h1 class="text-lg">
                  <p class="no-underline text-black">Successful Appointments</p>
                </h1>
              </header>

              <div class="flex items-center justify-center  text-gray-500 text-center leading-tight p-2 md:p-4">
                <p className="text-cyan-600 font-bold text-xl">
                  {dashboardCount.successfulAppointments}
                </p>
              </div>
            </article>
          </div>

          <div class="my-1 px-1 w-full md:w-1/2 sm:w-1/3 lg:my-4 lg:px-4 lg:w-1/4 cursor-pointer  ease-in-out duration-200">
            <article class="overflow-hidden rounded-lg shadow-lg bg-white hover:bg-blue-50 hover:scale-105 ease-in-out duration-200 h-[auto]">
              <div className="flex items-center justify-center leading-tight p-2 md:p-4"></div>

              <header class="flex items-center justify-center leading-tight">
                <h1 class="text-lg">
                  <p class="no-underline text-black">Cancelled Appointments</p>
                </h1>
              </header>

              <div class="flex items-center justify-center  text-gray-500 text-center leading-tight p-2 md:p-4">
                <p className="text-red-600 font-bold text-xl">
                  {dashboardCount.cancelledAppointments}
                </p>
              </div>
            </article>
          </div>

          <div class="my-1 px-1 w-full md:w-1/2 sm:w-1/3 lg:my-4 lg:px-4 lg:w-1/4 cursor-pointer ease-in-out duration-200">
            <article class="overflow-hidden rounded-lg shadow-lg bg-white hover:bg-blue-50 hover:scale-105 ease-in-out duration-200 h-[auto]">
              <div className="flex items-center justify-center leading-tight p-2 md:p-4"></div>

              <header class="flex items-center justify-center leading-tight">
                <h1 class="text-lg">
                  <p class="no-underline text-black">Verified Doctors</p>
                </h1>
              </header>

              <div class="flex items-center justify-center  text-gray-500 text-center leading-tight p-2 md:p-4">
                <p className="text-cyan-600 font-bold text-xl">
                  {dashboardCount.verifiedDoctors}
                </p>
              </div>
            </article>
          </div>

          <div class="my-1 px-1 w-full md:w-1/2 sm:w-1/3 lg:my-4 lg:px-4 lg:w-1/4 cursor-pointer ease-in-out duration-200">
            <article class="overflow-hidden rounded-lg shadow-lg bg-white hover:bg-blue-50 hover:scale-105 ease-in-out duration-200 h-[auto]">
              <div className="flex items-center justify-center leading-tight p-2 md:p-4"></div>

              <header class="flex items-center justify-center leading-tight">
                <h1 class="text-lg">
                  <p class="no-underline text-black">Unverified Doctors</p>
                </h1>
              </header>

              <div class="flex items-center justify-center  text-gray-500 text-center leading-tight p-2 md:p-4">
                <p className="text-red-600 font-bold text-xl">
                  {dashboardCount.unVerifiedDoctors}
                </p>
              </div>
            </article>
          </div>

          {/* -----------------------------------------------------------REACT CHART--------------------------------------------------------------------------- */}
          <div class="my-1 px-1 w-full md:w-1/2 sm:w-1/2 lg:my-4 lg:px-4 lg:w-full cursor-pointer hover:scale-105 ease-in-out duration-200">
            <div className="justify-center flex">
              <h1 className="text-lg text-cyan-800">Appointments</h1>
            </div>
            <article class="overflow-hidden rounded-lg shadow-lg bg-white hover:bg-blue-50 h-[auto]">
              <div className="flex items-center justify-center leading-tight p-2 md:p-4">
                <Chart
                  options={state.options}
                  series={state.series}
                  type="bar"
                  width="800"
                />
              </div>
            </article>
          </div>
          {/* -------------------------------------------------------------------------------------------------------------------------------------- */}
        </div>
      </div>

      {/* -----------------------------------------------------------DASHBOARD REVENUE--------------------------------------------------------------------------- */}

      <div class="my-1 px-1 w-full md:w-1/2 sm:w-1/2 lg:my-4 lg:px-4 lg:w-full cursor-pointer hover:scale-105 ease-in-out duration-200">
        <article class="overflow-hidden rounded-lg shadow-lg bg-white hover:bg-blue-50 h-[auto]">
          <div className="flex items-center justify-center leading-tight p-2 md:p-4">
            <a href="#"></a>
          </div>

          <header class="flex items-center justify-center leading-tight">
            <h1 class="text-lg">
              <p class="no-underline text-black">Total Revenue</p>
            </h1>
          </header>

          <div class="flex items-center justify-center  text-gray-500 text-center leading-tight p-2 md:p-4">
            <p className="text-green-600 font-bold text-xl">
              ₹{dashboardCount.totalRevenue}
            </p>
          </div>
        </article>
      </div>

      {/* -------------------------------------------------------------------------------------------------------------------------------------- */}
    </div>
  );
};

export default Dashboard;
