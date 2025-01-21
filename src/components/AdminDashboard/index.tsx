import React, { ReactNode } from "react";
import { Box, Button, Typography } from "@mui/material";
import { CiMenuFries } from "react-icons/ci";
import {  FaAddressBook,  FaUsers, FaChevronRight } from "react-icons/fa";
// import { useNavigate } from "react-router-dom"; 
// import Cookies from "js-cookie"; 
import './index.css';

// Admin menu items with corresponding icons
const adminList = [
  { id: 1, text: "Contact Details", route: "/admin/contact", icon: <FaAddressBook /> },
  { id: 2, text: "Our Team", route: "/admin/our-team", icon: <FaUsers /> },
  { id: 3, text: "Testimonals", route: "/admin/testimonal", icon: <FaUsers /> },
  { id: 4, text: "Careers", route: "/admin/careers", icon: <FaUsers /> },
  { id: 5, text: "Blogs", route: "/admin/blog", icon: <FaUsers /> },



];

interface AdminDashboardProps {
  children: ReactNode;
}

const AdminDashboardLayout: React.FC<AdminDashboardProps> = ({ children }) => {
  // const navigate = useNavigate(); 
  // useEffect(() => {
  //   const adminAuthToken = Cookies.get("adminAuthToken");
  //   if (!adminAuthToken) {
  //     navigate("/admin/login"); 
  //   }s
  // }, [navigate]);

  // const handleLogout = () => {
  //   Cookies.remove("adminAuthToken"); 
  //   navigate("/admin/login"); 
  // };

  return (
    <Box className="flex min-h-screen bg-gray-100 shadow-lg">
      {/* Left Sidebar */}
      <div className="left-side-menu w-80 bg-white text-black p-5 space-y-4">
        <Typography variant="h6" className="text-xl font-semibold">
          Admin Menu
        </Typography>
        {adminList.map((item) => (
          <Box key={item.id} className="hover:bg-gray-700 rounded-lg">
            <a href={item.route} className="py-2 px-3 text-black hover:text-gray-300 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-xl">{item.icon}</span>
                <span className="text-list mr-auto">{item.text}</span>
              </div>
              <span className="text-sm font-medium">
                <FaChevronRight />
              </span>
            </a>
          </Box>
        ))}
      </div>

      {/* Main Content Area */}
      <Box className="flex-1 bg-white p-5">
        <nav className="bg-white shadow-lg fixed w-full z-10 top-0 left-0 p-3 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Button className="text-gray-600 md:hidden">
              <CiMenuFries className="text-2xl" />
            </Button>
            <Typography variant="h6" component="a" href="/admin" className="font-semibold text-xl text-gray-800">
              ADMIN
            </Typography>
          </div>
          <Button
            className="bg-blue-500 text-white hover:bg-blue-600"
            
          >
            Log Out
          </Button>
        </nav>

        {/* Main Content */}
        <Box className="pt-16">
          {children || <div>Welcome to the Admin Dashboard</div>}
        </Box>
      </Box>
    </Box>
  );
};

export default AdminDashboardLayout;
