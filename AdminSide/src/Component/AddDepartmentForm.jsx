import React from "react";

const AddDepartmentForm = () => {
  return (
    <>
      <div class="p-4 sm:ml-64">
      <div className="rounded-2xl mt-10  h-[500px]  bg-blue-100 ">
        <div className="rounded-full h-1 w-full">
          <p className="text-3xl text-center pt-4">Add Department</p>
        </div>

        <div class="flex justify-center w-full mt-24 ">
          
            {/* <img
              src="https://static.vecteezy.com/system/resources/previews/005/411/889/original/syringe-illustration-object-medical-tools-flat-cartoon-style-suitable-for-icon-web-landing-page-banner-flyer-sticker-card-background-t-shirt-clip-art-free-vector.jpg"
              alt=""
              className="rounded-full h-96"
            /> */}
        
        </div>

        <div class="flex justify-center w-full mt-18 ">
          <input
            class="px-3 py-3 placeholder-slate-500 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-3/4"
            id="file_input"
            type="file"
            accept="image/*"
          />
        </div>

        <form >
          <div class="mt-10  pt-0 flex text-center items-center justify-center">
            <input
              type="text"
              placeholder="Department Name"
              class="px-3 py-3 placeholder-slate-500 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-3/4"             
            />
          </div>

          <div class="mt-10  pt-0 flex text-center items-center justify-center">
            <input
              type="text"
              placeholder="Description"
              class="px-3 py-3 placeholder-slate-500 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-3/4"   
            />
          </div>

          <div class="mt-10  pt-0 flex text-center items-center justify-center">
            <button
              type="submit"
              className="px-14 py-2 mt-6 text-white bg-cyan-700 rounded-lg hover:bg-cyan-800"
            >
              Add Department
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default AddDepartmentForm;
