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
  Paper,
  Avatar,
} from '@mui/material';
import { Plus, Pencil, Trash2, Clock, Tag } from 'lucide-react';
import { dummyBlogPosts } from '../../types/blog';
import type { BlogPost } from '../../types/blog';
import BlogDialog from './create-blog';
import AdminDashboardLayout from '..';

const BlogTable = () => {
  const [posts, setPosts] = useState(dummyBlogPosts);
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

  const handleCreatePost = (postData: Partial<BlogPost>) => {
    const newPost = {
      ...postData,
      id: String(posts.length + 1),
      createdAt: new Date().toISOString(),
      status: 'draft' as const,
    };
    setPosts([...posts, newPost as BlogPost]);
    setOpenDialog(false);
  };

  const BlogRow = ({ post }: { post: BlogPost }) => (
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Avatar
            variant="rounded"
            src={post.featuredImage}
            sx={{ width: 60, height: 60 }}
          />
          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              {post.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" noWrap sx={{ maxWidth: 300 }}>
              {post.excerpt}
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
              <Chip label={post.category} size="small" />
              {post.tags.slice(0, 2).map((tag:any) => (
                <Chip
                  key={tag}
                  label={tag}
                  size="small"
                  variant="outlined"
                  icon={<Tag size={14} />}
                />
              ))}
              {post.tags.length > 2 && (
                <Chip
                  label={`+${post.tags.length - 2}`}
                  size="small"
                  variant="outlined"
                />
              )}
            </Box>
          </Box>
        </Box>
      </TableCell>
      <TableCell>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <Clock size={16} />
          <Typography variant="body2">{post.readTime} min read</Typography>
        </Box>
      </TableCell>
      <TableCell>{post.author}</TableCell>
      <TableCell>
        <Chip
          label={post.status}
          color={post.status === 'published' ? 'success' : 'default'}
          size="small"
        />
      </TableCell>
      <TableCell>{new Date(post.createdAt).toLocaleDateString()}</TableCell>
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
            Blog Posts
          </Typography>
          <Button
            variant="contained"
            startIcon={<Plus size={20} />}
            onClick={() => setOpenDialog(true)}
          >
            Create New Post
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
                        <Box sx={{ height: 60, bgcolor: '#f5f5f5', borderRadius: 1 }} />
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
                  <TableCell sx={{ fontWeight: 600 }}>Post</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Read Time</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Author</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Date</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {posts
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((post:any) => (
                    <BlogRow key={post.id} post={post} />
                  ))}
              </TableBody>
            </Table>
          )}
        </TableContainer>
        <TablePagination
          component="div"
          count={posts.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </Box>
      <BlogDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        onSubmit={handleCreatePost}
      />
    </Paper>
    </AdminDashboardLayout>

  );
};

export default BlogTable;