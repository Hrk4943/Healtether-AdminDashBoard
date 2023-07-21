import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UsersList from "./Pages/Users";
import DoctorList from "./Pages/Doctor";
import AddDepartment from "./Pages/AddDepartment";
import DepartmentManagement from "./Pages/DepartmentManagement";
import DoctorVerification from "./Pages/DoctorVerification";
import Dashboard from "./Pages/DashBoard";


function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route>
              <Route path="/" element={<Dashboard />} />
              <Route path="/admin/users" element={<UsersList />} />
              <Route path="/admin/doctors" element={<DoctorList />} />
              <Route path="/admin/addDepartment" element={<AddDepartment />} />
              <Route
                path="/admin/departmentManagement"
                element={<DepartmentManagement />}
              />
              <Route
                path="/admin/doctorVerification"
                element={<DoctorVerification />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
