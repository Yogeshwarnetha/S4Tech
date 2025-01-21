import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Box,
  IconButton,
  Rating,
  Typography,
} from '@mui/material';
import { X, Star } from 'lucide-react';
import type { Testimonial } from '../../types/testimonal';

interface TestimonialDialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: Partial<Testimonial>) => void;
}

const TestimonialDialog: React.FC<TestimonialDialogProps> = ({
  open,
  onClose,
  onSubmit,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    company: '',
    rating: 5,
    description: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRatingChange = (_: React.SyntheticEvent, value: number | null) => {
    setFormData((prev) => ({
      ...prev,
      rating: value || 5,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      name: '',
      position: '',
      company: '',
      rating: 5,
      description: '',
    });
  };

  return (
    <Dialog 
      open={open} 
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        elevation: 0,
        sx: {
          borderRadius: 2,
        }
      }}
    >
      <DialogTitle sx={{ m: 0, p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        Add New Testimonial
        <IconButton onClick={onClose}>
          <X size={20} />
        </IconButton>
      </DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent dividers>
          <Box sx={{ display: 'grid', gap: 3 }}>
            <TextField
              fullWidth
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: 'repeat(2, 1fr)' }}>
              <TextField
                fullWidth
                label="Position"
                name="position"
                value={formData.position}
                onChange={handleChange}
                required
              />

              <TextField
                fullWidth
                label="Company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
              />
            </Box>

            <Box>
              <Typography component="legend">Rating</Typography>
              <Rating
                name="rating"
                value={formData.rating}
                onChange={handleRatingChange}
                icon={<Star fill="currentColor" size={30} />}
                emptyIcon={<Star size={30} />}
                sx={{ mt: 1 }}
              />
            </Box>

            <TextField
              fullWidth
              label="Testimonial"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              multiline
              rows={4}
              placeholder="Share your experience..."
            />
          </Box>
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" variant="contained">
            Add Testimonial
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default TestimonialDialog;