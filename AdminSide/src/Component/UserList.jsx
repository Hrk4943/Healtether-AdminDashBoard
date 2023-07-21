import React from "react";
import { useState, useEffect } from "react";
import "./style.css";

const UserList = () => {
  const [user, setUser] = useState([
    {
      _id: "1",
      profilePhoto:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiOH80WRk1WEtUqNcwmVf6MfxzLuSQHoojxGD7ge6eAlGyA-ZkL-5mJ99z8n2rsQHlZlo&usqp=CAU",
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      phoneNumber: "1234567890",
      block: false,
    },
    {
      _id: "2",
      profilePhoto:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiOH80WRk1WEtUqNcwmVf6MfxzLuSQHoojxGD7ge6eAlGyA-ZkL-5mJ99z8n2rsQHlZlo&usqp=CAU",
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@example.com",
      phoneNumber: "9876543210",
      block: true,
    },
  ]);

  return (
    <>
      <div className="p-4 sm:ml-64">
        <div className="flex items-center justify-center leading-tight p-2 md:p-4  w-100">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiOH80WRk1WEtUqNcwmVf6MfxzLuSQHoojxGD7ge6eAlGyA-ZkL-5mJ99z8n2rsQHlZlo&usqp=CAU"
            className="h-20"
            alt=""
          />
        </div>
        <p className="text-3xl text-center pt-4">User Management</p>

        <div className="container">
          <table className="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
            <thead className="text-white">
              <tr className="bg-blue-300 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                <th className="p-3 text-left">Profile</th>
                <th className="p-3 text-left">Full Name</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">PhoneNumber</th>
                <th className="p-3 text-left" width="110px">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="flex-1 sm:flex-none">
              {user.map((user) => (
                <tr
                  className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0"
                  key={user._id}
                >
                  <td className="border-grey-light border hover:bg-gray-100 p-3 flex justify-center">
                    <img
                      src={user.profilePhoto}
                      className="h-10 rounded"
                      alt="user Profile"
                    />
                  </td>
                  <td className="border-grey-light border hover:bg-gray-100 p-3">
                    {user.firstName} {user.lastName}
                  </td>
                  <td className="border-grey-light border hover:bg-gray-100 p-3 truncate">
                    {user.email}
                  </td>
                  <td className="border-grey-light border hover:bg-gray-100 p-3 truncate">
                    +91 {user.phoneNumber}
                  </td>
                  {user.block ? (
                    <td
                      className="border-grey-light border hover:bg-gray-100 p-3 text-green-400 hover:text-green-600 hover:font-medium cursor-pointer"
                      onClick={() => unBlockUser(user._id)}
                    >
                      unBlock
                    </td>
                  ) : (
                    <td
                      className="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer"
                      onClick={() => blockUser(user._id)}
                    >
                      Block
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

export default UserList;
