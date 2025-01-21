import React from "react";
import { Box, Typography, Card, CardContent, CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {   
  FaAddressBook,         
  FaUsers,            
} from "react-icons/fa";
import './index.css';

const adminList = [
  { id: 1, text: "Contact Details", route: "/admin/contact", icon: <FaAddressBook /> },
  { id: 2, text: "Our Team", route: "/admin/our-team", icon: <FaUsers /> },
];

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box className="flex flex-col items-center bg-white-100 min-h-screen p-5">
      <Typography variant="h4" className="font-semibold mb-5 py-4" style={{ fontFamily: 'Poppins' }}>
        Admin Dashboard
      </Typography>
      <Box className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-6xl">
        {adminList.map((item) => (
          <Card
            key={item.id}
            className="hover:shadow-lg transition-shadow"
            onClick={() => navigate(item.route)}
          >
            <CardActionArea>
              <CardContent className="flex flex-col items-center text-center" style={{ gap: 4, margin: 5 }}>
                <Box className="text-3xl text-blue-500 mb-2">{item.icon}</Box>
                <Typography variant="h6" className="font-medium" style={{ fontFamily: 'Poppins' }}>
                  {item.text}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Dashboard;
