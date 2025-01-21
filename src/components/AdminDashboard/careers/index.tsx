import React, { useState, useEffect } from 'react';
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
  Chip,
} from '@mui/material';
import { Pencil, Trash2, Users, MapPin, Building2, Plus } from 'lucide-react';
import { dummyCareers } from '../../Data';
import JobCreationDialog from './create-careers';
import { Career } from '../../types/career';
import AdminDashboardLayout from '..';

const CareersTable = () => {
  const [careers, setCareers] = useState(dummyCareers);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleCreateJob = (jobData: any) => {
    setCareers([...careers, { ...jobData, id: String(careers.length + 1) }]);
    setOpenDialog(false);
  };

  const CareerRow = ({ career }: { career: Career }) => (
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell>
        <Box>
          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
            {career.title}
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <Building2 size={16} />
              <Typography variant="body2" color="text.secondary">
                {career.department}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <MapPin size={16} />
              <Typography variant="body2" color="text.secondary">
                {career.location}
              </Typography>
            </Box>
          </Box>
        </Box>
      </TableCell>
      <TableCell>
        <Chip label={career.type} color="primary" variant="outlined" size="small" />
      </TableCell>
      <TableCell>{career.salary}</TableCell>
      <TableCell>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <Users size={16} />
          <Typography variant="body2">{career.applicants} applicants</Typography>
        </Box>
      </TableCell>
      <TableCell>{new Date(career.postedDate).toLocaleDateString()}</TableCell>
      <TableCell>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button variant="outlined" size="small" startIcon={<Pencil size={16} />}>
            Edit
          </Button>
          <Button variant="outlined" color="error" size="small" startIcon={<Trash2 size={16} />}>
            Delete
          </Button>
        </Box>
      </TableCell>
    </TableRow>
  );

  return (
    <AdminDashboardLayout>
          <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Box sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            Job Positions
          </Typography>
          <Button
            variant="contained"
            startIcon={<Plus size={20} />}
            onClick={() => setOpenDialog(true)}
          >
            Create New Position
          </Button>
        </Box>
        
        <TableContainer>
          {loading ? (
            <Table>
              <TableHead>
                <TableRow>
                  {[...Array(6)].map((_, index) => (
                    <TableCell key={index}>
                      <Box sx={{ height: 20, bgcolor: '#f5f5f5', borderRadius: 1 }} />
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {[...Array(3)].map((_, rowIndex) => (
                  <TableRow key={rowIndex}>
                    {[...Array(6)].map((_, colIndex) => (
                      <TableCell key={colIndex}>
                        <Box sx={{ height: 40, bgcolor: '#f5f5f5', borderRadius: 1 }} />
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
                  <TableCell sx={{ fontWeight: 600 }}>Position</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Type</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Salary Range</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Applicants</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Posted Date</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {careers
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((career) => (
                    <CareerRow key={career.id} career={career} />
                  ))}
              </TableBody>
            </Table>
          )}
        </TableContainer>
        <TablePagination
          component="div"
          count={careers.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </Box>
      <JobCreationDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        onSubmit={handleCreateJob}
      />
    </Box>
    </AdminDashboardLayout>

  );
};

export default CareersTable;