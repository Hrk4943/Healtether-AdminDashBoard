import React from "react";
import { useEffect, useState } from "react";



const DoctorVerificationList = () => {
    const [doctor, setDoctor] = useState([]);
    useEffect(() => {
     
      const demo = {
        data: {
          doctorData: [
            {
              _id: "1",
              idNumber: "12345",
              firstName: "John",
              lastName: "Doe",
              experience: 5,
              fee: 500,
              qualification: "MBBS",
              verificationStatus: false,
              certificateImage: "https://static.vecteezy.com/system/resources/previews/015/412/022/original/doctor-round-avatar-medicine-flat-avatar-with-male-doctor-medical-clinic-team-round-icon-medical-collection-illustration-vector.jpg",
              idCardImage: "https://static.vecteezy.com/system/resources/previews/015/412/022/original/doctor-round-avatar-medicine-flat-avatar-with-male-doctor-medical-clinic-team-round-icon-medical-collection-illustration-vector.jpg",
            },
            {
              _id: "2",
              idNumber: "54321",
              firstName: "Jane",
              lastName: "Smith",
              experience: 8,
              fee: 800,
              qualification: "MD",
              verificationStatus: true,
              certificateImage: "https://static.vecteezy.com/system/resources/previews/015/412/022/original/doctor-round-avatar-medicine-flat-avatar-with-male-doctor-medical-clinic-team-round-icon-medical-collection-illustration-vector.jpg",
              idCardImage: "https://static.vecteezy.com/system/resources/previews/015/412/022/original/doctor-round-avatar-medicine-flat-avatar-with-male-doctor-medical-clinic-team-round-icon-medical-collection-illustration-vector.jpg",
            },
          ],
        },
      };
      setDoctor(demo.data.doctorData);
    }, []);
  
  return (
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
              <th className="p-3 text-left">Id Num</th>
              <th className="p-3 text-left">Full Name</th>
              <th className="p-3 text-left">Experience</th>
              <th className="p-3 text-left">Fee</th>
              <th className="p-3 text-left">Qualification</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Details</th>
              <th className="p-3 text-left" width="110px">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="flex-1 sm:flex-none">
            {doctor.map((doctor) => (
              <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0" key={doctor._id}>
                <td className="border-grey-light border hover:bg-gray-100 p-3">{doctor.idNumber}</td>
                <td className="border-grey-light border hover:bg-gray-100 p-3 truncate">
                  {doctor.firstName} {doctor.lastName}
                </td>
                <td className="border-grey-light border hover:bg-gray-100 p-3 truncate">{doctor.experience} years</td>
                <td className="border-grey-light border hover:bg-gray-100 p-3 truncate">₹{doctor.fee}</td>
                <td className="border-grey-light border hover:bg-gray-100 p-3 truncate">{doctor.qualification}</td>

                {doctor.verificationStatus ? (
                  <td className="border-grey-light border hover:bg-gray-100 p-3 text-green-400  hover:font-medium cursor-pointer">
                    Approved
                  </td>
                ) : (
                  <td className="border-grey-light border hover:bg-gray-100 p-3 text-yellow-400  hover:font-medium cursor-pointer">
                    Pending
                  </td>
                )}

                <td
                  className="border-grey-light border hover:bg-gray-100 p-3 truncate text-blue-500 cursor-pointer"
                  >
                  View Certificate and ID Image
                </td>

                {doctor.verificationStatus ? (
                  <td
                    className="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">
                    Unverify
                  </td>
                ) : (
                  <td
                    className="border-grey-light border hover:bg-gray-100 p-3 text-green-400 hover:text-green-600 hover:font-medium cursor-pointer">
                    Verify
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

export default DoctorVerificationList;
