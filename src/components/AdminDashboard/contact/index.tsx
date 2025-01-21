import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Typography,
} from "@mui/material";
import { MdDelete, MdEdit } from "react-icons/md";
import AdminDashboardLayout from "..";

// Dummy data for testing
const dummySubmissions = [
  {
    id: "1",
    fullName: "John Doe",
    email: "john.doe@example.com",
    message: "I have an inquiry about your services.",
    createdAt: "2024-12-10",
  },
  {
    id: "2",
    fullName: "Jane Smith",
    email: "jane.smith@example.com",
    message: "Could you provide more details about the pricing?",
    createdAt: "2024-12-12",
  },
  {
    id: "3",
    fullName: "David Johnson",
    email: "david.johnson@example.com",
    message: "I'm interested in a collaboration.",
    createdAt: "2024-12-14",
  },
];

interface ContactForm {
  id: string;
  fullName: string;
  email: string;
  message: string;
  createdAt: string;
}

const ContactUsDashboard = () => {
  const [submissions, setSubmissions] = useState<ContactForm[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [count] = useState(3);

  useEffect(() => {
    setTimeout(() => {
      setSubmissions(dummySubmissions);
      setLoading(false);
    }, 2000);
  }, []);

  const handleChangePage = (
    _: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage + 1);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setLimit(parseInt(event.target.value, 10));
  };

  const Child = ({ data }: { data: ContactForm }) => (
    <TableRow key={data.id}>
      <TableCell sx={{ fontFamily: "Poppins", fontSize: 14 }}>
        {data.fullName}
      </TableCell>
      <TableCell sx={{ fontFamily: "Poppins", fontSize: 14 }}>
        {data.email}
      </TableCell>
      <TableCell sx={{ fontFamily: "Poppins", fontSize: 14 }}>
        {data.message}
      </TableCell>
      <TableCell sx={{ fontFamily: "Poppins", fontSize: 14 }}>
        {data.createdAt}
      </TableCell>
      <TableCell>
        <Button variant="contained" color="primary">
          <MdEdit fontSize={20} /> Edit
        </Button>
        <Button variant="contained" color="error">
          <MdDelete fontSize={20} /> Delete
        </Button>
      </TableCell>
    </TableRow>
  );

  return (
    <AdminDashboardLayout>
      <Box sx={{ padding: 2 }}>
        <Box sx={{ padding: 2 }}>
          <Typography variant="h6" sx={{ m: 2 }}>
            Contact Form Submissions
          </Typography>
          <TableContainer>
            {loading ? (
              <Table>
                <TableHead>
                  <TableRow>
                    {[...Array(5)].map((_, index) => (
                      <TableCell key={index}>
                        <div className="shimmer-item" style={{ height: "20px" }}></div>
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {[...Array(3)].map((_, rowIndex) => (
                    <TableRow key={rowIndex}>
                      {[...Array(5)].map((_, colIndex) => (
                        <TableCell key={colIndex}>
                          <div className="shimmer-item"></div>
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : (
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell
                      sx={{
                        fontWeight: 700,
                        fontSize: 16,
                        fontFamily: "Jost",
                      }}
                    >
                      Full Name
                    </TableCell>
                    <TableCell
                      sx={{
                        fontWeight: 700,
                        fontSize: 16,
                        fontFamily: "Jost",
                      }}
                    >
                      Email
                    </TableCell>
                    <TableCell
                      sx={{
                        fontWeight: 700,
                        fontSize: 16,
                        fontFamily: "Jost",
                      }}
                    >
                      Message
                    </TableCell>
                    <TableCell
                      sx={{
                        fontWeight: 700,
                        fontSize: 16,
                        fontFamily: "Jost",
                      }}
                    >
                      Submitted At
                    </TableCell>
                    <TableCell
                      sx={{
                        fontWeight: 700,
                        fontSize: 16,
                        fontFamily: "Jost",
                      }}
                    >
                      Actions
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {submissions.map((submission) => (
                    <Child key={submission.id} data={submission} />
                  ))}
                </TableBody>
              </Table>
            )}
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25, 50, 100]}
            component="div"
            count={count}
            page={page - 1}
            onPageChange={handleChangePage}
            rowsPerPage={limit}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Box>
      </Box>
    </AdminDashboardLayout>
  );
};

export default ContactUsDashboard;
