import React from "react";
import { RiAdminFill } from "react-icons/ri";

const Admin = () => {
  const redirectToDashboard = () => {
    window.location.href = "https://dashboard-educatio.vercel.app";
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        onClick={redirectToDashboard}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded shadow-lg absolute top-4 right-8"
        
        style={{ zIndex: 9999 }}
      >
         
         Admin
         
      </button>
    </div>
  );
};

export default Admin;
