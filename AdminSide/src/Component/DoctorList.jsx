import React from "react";
import { useState, useEffect } from "react";

import "./style.css";

const DoctorList = () => {
    const [doctor, setDoctor] = useState([]);
    useEffect(() => {
      const demo = {
        data: {
          doctors: [
            {
              _id: "1",
              profilePhoto: "https://static.vecteezy.com/system/resources/previews/015/412/022/original/doctor-round-avatar-medicine-flat-avatar-with-male-doctor-medical-clinic-team-round-icon-medical-collection-illustration-vector.jpg",
              firstName: "John",
              lastName: "Doe",
              email: "john.doe@example.com",
              phoneNumber: "1234567890",
              block: false,
            },
            {
              _id: "2",
              profilePhoto: "https://static.vecteezy.com/system/resources/previews/015/412/022/original/doctor-round-avatar-medicine-flat-avatar-with-male-doctor-medical-clinic-team-round-icon-medical-collection-illustration-vector.jpg",
              firstName: "Jane",
              lastName: "Smith",
              email: "jane.smith@example.com",
              phoneNumber: "9876543210",
              block: true,
            },
          ],
        },
      };
      setDoctor(demo.data.doctors);
    }, []);
  

  
  

    return(
        <>
         <div className="p-4 sm:ml-64">
      <div className="flex items-center justify-center leading-tight p-2 md:p-4  w-100">
        <img
          src="https://static.vecteezy.com/system/resources/previews/015/412/022/original/doctor-round-avatar-medicine-flat-avatar-with-male-doctor-medical-clinic-team-round-icon-medical-collection-illustration-vector.jpg"
          className="h-24 rounded-full"
          alt=""
        />
      </div>
      <p className="text-3xl text-center pt-4">Doctor Management</p>

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
            {doctor.map((doctor) => (
              <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0" key={doctor._id}>
                <td className="border-grey-light border hover:bg-gray-100 p-3 flex justify-center">
                  <img src={doctor.profilePhoto} className="h-10 rounded" alt="user Profile" />
                </td>
                <td className="border-grey-light border hover:bg-gray-100 p-3">
                  {doctor.firstName} {doctor.lastName}
                </td>
                <td className="border-grey-light border hover:bg-gray-100 p-3 truncate">
                  {doctor.email}
                </td>
                <td className="border-grey-light border hover:bg-gray-100 p-3 truncate">
                  +91 {doctor.phoneNumber}
                </td>
                {doctor.block ? (
                  <td className="border-grey-light border hover:bg-gray-100 p-3 text-green-400 hover:text-green-600 hover:font-medium cursor-pointer" >
                    Unblock
                  </td>
                ) : (
                  <td className="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">
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
        
    )
}

export default DoctorList;
