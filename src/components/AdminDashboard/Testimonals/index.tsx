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
  Rating,
  Paper,
} from '@mui/material';
import { Plus, Pencil, Trash2, Star } from 'lucide-react';
import { dummyTestimonials } from '../../types/testimonal';
import type { Testimonial } from '../../types/testimonal';
import TestimonialDialog from './create-testimonal';
import AdminDashboardLayout from '..';

const TestimonialsTable = () => {
  const [testimonials, setTestimonials] = useState(dummyTestimonials);
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

  const handleCreateTestimonial = (testimonialData: Partial<Testimonial>) => {
    const newTestimonial = {
      ...testimonialData,
      id: String(testimonials.length + 1),
      createdAt: new Date().toISOString(),
      status: 'published' as const,
    };
    setTestimonials([...testimonials, newTestimonial as Testimonial]);
    setOpenDialog(false);
  };

  const TestimonialRow = ({ testimonial }: { testimonial: Testimonial }) => (
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell>
        <Box>
          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
            {testimonial.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {testimonial.position} at {testimonial.company}
          </Typography>
        </Box>
      </TableCell>
      <TableCell>
        <Rating
          value={testimonial.rating}
          readOnly
          icon={<Star fill="currentColor" size={20} />}
          emptyIcon={<Star size={20} />}
        />
      </TableCell>
      <TableCell sx={{ maxWidth: 300 }}>
        <Typography noWrap>{testimonial.description}</Typography>
      </TableCell>
      <TableCell>
        <Chip
          label={testimonial.status}
          color={testimonial.status === 'published' ? 'success' : 'default'}
          size="small"
        />
      </TableCell>
      <TableCell>{new Date(testimonial.createdAt).toLocaleDateString()}</TableCell>
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
    <Paper elevation={0} sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Box sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            Testimonials
          </Typography>
          <Button
            variant="contained"
            startIcon={<Plus size={20} />}
            onClick={() => setOpenDialog(true)}
          >
            Add Testimonial
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
                  <TableCell sx={{ fontWeight: 600 }}>Name</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Rating</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Testimonial</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Date</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {testimonials
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((testimonial) => (
                    <TestimonialRow key={testimonial.id} testimonial={testimonial} />
                  ))}
              </TableBody>
            </Table>
          )}
        </TableContainer>
        <TablePagination
          component="div"
          count={testimonials.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </Box>
      <TestimonialDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        onSubmit={handleCreateTestimonial}
      />
    </Paper>
    </AdminDashboardLayout>
  );
};

export default TestimonialsTable;