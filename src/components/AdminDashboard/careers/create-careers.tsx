import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  MenuItem,
  Box,
  IconButton,
} from '@mui/material';
import { X } from 'lucide-react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { jobTypes, departments } from '../../types/career';

interface JobCreationDialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
}

const JobCreationDialog: React.FC<JobCreationDialogProps> = ({
  open,
  onClose,
  onSubmit,
}) => {
  const [formData, setFormData] = useState({
    title: '',
    department: '',
    location: '',
    type: '',
    salary: '',
    description: '',
    requirements: '',
    benefits: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name as string]: value,
    }));
  };

  const handleQuillChange = (value: string, field: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      postedDate: new Date().toISOString(),
      status: 'active',
      applicants: 0,
    });
    setFormData({
      title: '',
      department: '',
      location: '',
      type: '',
      salary: '',
      description: '',
      requirements: '',
      benefits: '',
    });
  };

  return (
    <Dialog 
      open={open} 
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: { minHeight: '80vh' }
      }}
    >
      <DialogTitle sx={{ m: 0, p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        Create New Job Position
        <IconButton onClick={onClose}>
          <X size={20} />
        </IconButton>
      </DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent dividers>
          <Box sx={{ display: 'grid', gap: 3 }}>
            <TextField
              fullWidth
              label="Job Title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />

            <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: 'repeat(2, 1fr)' }}>
              <TextField
                select
                label="Department"
                name="department"
                value={formData.department}
                onChange={handleChange}
                required
              >
                {departments.map((dept:any) => (
                  <MenuItem key={dept} value={dept}>
                    {dept}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                select
                label="Job Type"
                name="type"
                value={formData.type}
                onChange={handleChange}
                required
              >
                {jobTypes.map((type) => (
                  <MenuItem key={type} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </TextField>
            </Box>

            <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: 'repeat(2, 1fr)' }}>
              <TextField
                fullWidth
                label="Location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
              />

              <TextField
                fullWidth
                label="Salary Range"
                name="salary"
                value={formData.salary}
                onChange={handleChange}
                placeholder="e.g., $50,000 - $70,000"
                required
              />
            </Box>

            <Box sx={{ display: 'grid', gap: 3 }}>
              <Box>
                <Box sx={{ mb: 1 }}>Job Description</Box>
                <ReactQuill
                  theme="snow"
                  value={formData.description}
                  onChange={(value) => handleQuillChange(value, 'description')}
                  style={{ height: '200px', marginBottom: '2rem' }}
                />
              </Box>

              <Box>
                <Box sx={{ mb: 1 }}>Requirements</Box>
                <ReactQuill
                  theme="snow"
                  value={formData.requirements}
                  onChange={(value) => handleQuillChange(value, 'requirements')}
                  style={{ height: '200px', marginBottom: '2rem' }}
                />
              </Box>

              <Box>
                <Box sx={{ mb: 1 }}>Benefits</Box>
                <ReactQuill
                  theme="snow"
                  value={formData.benefits}
                  onChange={(value) => handleQuillChange(value, 'benefits')}
                  style={{ height: '200px', marginBottom: '2rem' }}
                />
              </Box>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" variant="contained">
            Create Position
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default JobCreationDialog;