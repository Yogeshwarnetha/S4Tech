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
  Typography,
  MenuItem,
  Autocomplete,
  Chip,
} from '@mui/material';
import { X, Image as ImageIcon } from 'lucide-react';
import type { BlogPost } from '../../types/blog';
import { blogCategories } from '../../types/blog';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface BlogDialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: Partial<BlogPost>) => void;
}

const BlogDialog: React.FC<BlogDialogProps> = ({
  open,
  onClose,
  onSubmit,
}) => {
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    author: '',
    category: '',
    tags: [] as string[],
    featuredImage: '',
    readTime: 5,
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

  const handleQuillChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      content: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      title: '',
      excerpt: '',
      content: '',
      author: '',
      category: '',
      tags: [],
      featuredImage: '',
      readTime: 5,
    });
  };

  return (
    <Dialog 
      open={open} 
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        elevation: 0,
        sx: {
          borderRadius: 2,
          minHeight: '80vh'
        }
      }}
    >
      <DialogTitle sx={{ m: 0, p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        Create New Blog Post
        <IconButton onClick={onClose}>
          <X size={20} />
        </IconButton>
      </DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent dividers>
          <Box sx={{ display: 'grid', gap: 3 }}>
            <TextField
              fullWidth
              label="Post Title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />

            <TextField
              fullWidth
              label="Excerpt"
              name="excerpt"
              value={formData.excerpt}
              onChange={handleChange}
              required
              multiline
              rows={2}
              placeholder="Brief summary of the post..."
            />

            <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: 'repeat(2, 1fr)' }}>
              <TextField
                fullWidth
                label="Author"
                name="author"
                value={formData.author}
                onChange={handleChange}
                required
              />

              <TextField
                select
                fullWidth
                label="Category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                {blogCategories.map((category:any) => (
                  <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </TextField>
            </Box>

            <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: 'repeat(2, 1fr)' }}>
              <TextField
                fullWidth
                label="Featured Image URL"
                name="featuredImage"
                value={formData.featuredImage}
                onChange={handleChange}
                required
                InputProps={{
                  startAdornment: <ImageIcon size={20} style={{ marginRight: 8 }} />,
                }}
              />

              <TextField
                fullWidth
                type="number"
                label="Read Time (minutes)"
                name="readTime"
                value={formData.readTime}
                onChange={handleChange}
                required
                inputProps={{ min: 1 }}
              />
            </Box>

            <Autocomplete
              multiple
              freeSolo
              options={[]}
              value={formData.tags}
              onChange={(_, newValue) => {
                setFormData(prev => ({
                  ...prev,
                  tags: newValue
                }));
              }}
              renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                  <Chip
                    variant="outlined"
                    label={option}
                    {...getTagProps({ index })}
                  />
                ))
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Tags"
                  placeholder="Add tags..."
                />
              )}
            />

            <Box>
              <Typography sx={{ mb: 1 }}>Content</Typography>
              <ReactQuill
                theme="snow"
                value={formData.content}
                onChange={handleQuillChange}
                style={{ height: '200px', marginBottom: '2rem' }}
                modules={{
                  toolbar: [
                    [{ header: [1, 2, false] }],
                    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                    [{ list: 'ordered' }, { list: 'bullet' }],
                    ['link', 'image', 'code-block'],
                    ['clean'],
                  ],
                }}
              />
            </Box>
          </Box>
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" variant="contained">
            Create Post
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default BlogDialog;