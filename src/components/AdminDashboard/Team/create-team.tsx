import React, { useState, ChangeEvent, FormEvent } from 'react';
import { PlusCircle } from 'lucide-react';
import { Button } from '../../ui/Button';
import { Input } from '../../ui/Input';
import { Modal } from '../../ui/Modal';

interface FormData {
  imageUrl: string;
  name: string;
  designation: string;
  imageFile: File | null;
}

const OurTeamModal: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    imageUrl: '',
    name: '',
    designation: '',
    imageFile: null,
  });
  const [errors, setErrors] = useState<any>({});

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setFormData((prev) => ({
        ...prev,
        imageFile: file,
      }));
    }
  };

  const validateForm = () => {
    const errors: any = {};
    if (!formData.imageUrl) errors.imageUrl = 'Image URL is required';
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.designation) errors.designation = 'Designation is required';
    return errors;
  };

  const handleImageUpload = async () => {
    if (formData.imageFile) {
      // Send a request to your backend to get the signed URL for the image upload
      const { data } = await fetch('/upload-image', {
        method: 'POST',
        body: JSON.stringify({
          fileName: formData.imageFile.name,
          fileType: formData.imageFile.type,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((res) => res.json());

      const { uploadUrl, imageUrl } = data;

      // Upload the image to S3 using the signed URL
      await fetch(uploadUrl, {
        method: 'PUT',
        body: formData.imageFile,
        headers: {
          'Content-Type': formData.imageFile.type,
        },
      });

      // Set the image URL to the form
      setFormData((prev) => ({
        ...prev,
        imageUrl,
      }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Proceed to submit the form to create a new team member
    const { name, designation, imageUrl } = formData;
    const response = await fetch('/create-team-member', {
      method: 'POST',
      body: JSON.stringify({
        name,
        designation,
        imageId: imageUrl, // send the imageUrl or imageId to associate with the team member
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      resetForm();
      setOpen(false);
    }
  };

  const resetForm = () => {
    setFormData({
      imageUrl: '',
      name: '',
      designation: '',
      imageFile: null,
    });
    setErrors({});
  };

  const handleClose = () => {
    setOpen(false);
    resetForm();
  };

  return (
    <>
      <Button onClick={() => setOpen(true)} className="flex items-center gap-2">
        <PlusCircle className="h-4 w-4" />
        Add Team Member
      </Button>

      <Modal open={open} onClose={handleClose}>
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Create New Team Member</h2>
            <p className="text-gray-600 mt-1">Fill in the details below to create a new team member.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <Input
                id="imageUrl"
                name="imageUrl"
                label="Image URL"
                placeholder="Image URL will be generated after upload"
                value={formData.imageUrl}
                onChange={handleInputChange}
                error={errors.imageUrl}
              />

              <input
                type="file"
                name="imageFile"
                accept="image/*"
                onChange={handleFileChange}
                className="block w-full border rounded p-2"
              />

              <Input
                id="name"
                name="name"
                label="Name"
                placeholder="Enter team member's name"
                value={formData.name}
                onChange={handleInputChange}
                error={errors.name}
              />

              <Input
                id="designation"
                name="designation"
                label="Designation"
                placeholder="Enter team member's designation"
                value={formData.designation}
                onChange={handleInputChange}
                error={errors.designation}
              />
            </div>

            <div className="flex justify-end space-x-4 pt-4">
              <Button type="button" variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <Button type="submit" onClick={handleImageUpload}>
                Add Team Member
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default OurTeamModal;
