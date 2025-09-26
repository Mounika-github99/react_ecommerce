import React from "react";
import AppNavbar from "../common/Navbar";
import Sidebar from "../common/Sidebar";
import Footer from "../common/Footer";

const AdminLayout = ({ children }) => {
  return (
    <div className="d-flex flex-column vh-100">
      <AppNavbar />
      <div className="d-flex flex-grow-1">
        <Sidebar />
        <div className="flex-grow-1 overflow-auto">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminLayout;
