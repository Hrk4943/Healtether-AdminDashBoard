import React, { useState } from "react";
import { useEffect } from "react";
import "./style.css";

const DepartmentList = () => {
  const [department, setDepartment] = useState([]);

  useEffect(() => {
    const demo = {
      data: {
        departments: [
          {
            _id: "1",
            departmentImage:
              "https://static.vecteezy.com/system/resources/previews/005/411/889/original/syringe-illustration-object-medical-tools-flat-cartoon-style-suitable-for-icon-web-landing-page-banner-flyer-sticker-card-background-t-shirt-clip-art-free-vector.jpg",
            departmentName: "Cardiology",
            departmentDiscription: "This is the cardiology department.",
            show: true,
          },
          {
            _id: "2",
            departmentImage:
              "https://static.vecteezy.com/system/resources/previews/005/411/889/original/syringe-illustration-object-medical-tools-flat-cartoon-style-suitable-for-icon-web-landing-page-banner-flyer-sticker-card-background-t-shirt-clip-art-free-vector.jpg",
            departmentName: "Dermatology",
            departmentDiscription: "This is the dermatology department.",
            show: false,
          },
        ],
      },
    };
    setDepartment(demo.data.departments);
  }, []);

  return (
    <>
      <div className="p-4 sm:ml-64">
        <div className="flex items-center justify-center leading-tight p-2 md:p-4  w-100">
          <img
            src="https://static.vecteezy.com/system/resources/previews/005/411/889/original/syringe-illustration-object-medical-tools-flat-cartoon-style-suitable-for-icon-web-landing-page-banner-flyer-sticker-card-background-t-shirt-clip-art-free-vector.jpg"
            className="h-24 rounded-full"
            alt=""
          />
        </div>
        <p className="text-3xl text-center pt-4">Department Management</p>

        <div className="container">
          <table className="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
            <thead className="text-white">
              <tr className="bg-blue-300 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                <th className="p-3 text-left w-[100px] h-16">Image</th>
                <th className="p-3 text-left w-[260px]">Name</th>
                <th className="p-3 text-left">Description</th>
                <th className="p-3 text-left w-1/6">Action</th>
              </tr>
            </thead>
            <tbody className="flex-1 sm:flex-none">
              {department.map((department) => (
                <tr
                  className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0"
                  key={department._id}
                >
                  <td className="border-grey-light border hover:bg-gray-100 p-3">
                    <img
                      src={department.departmentImage}
                      className="rounded-full h-10"
                      alt=""
                    />
                  </td>
                  <td className="border-grey-light border hover:bg-gray-100 p-3 truncate">
                    {department.departmentName}
                  </td>
                  <td className="border-grey-light border hover:bg-gray-100 p-3 truncate">
                    {department.departmentDiscription}
                  </td>
                  {department.show ? (
                    <td className="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">
                      Hide
                    </td>
                  ) : (
                    <td className="border-grey-light border hover:bg-gray-100 p-3 text-green-400 hover:text-green-600 hover:font-medium cursor-pointer">
                      Show
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DepartmentList;
