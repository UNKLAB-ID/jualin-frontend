"use client";

import { useState } from "react";
import { Controller, UseFormReturn } from "react-hook-form";
import {
  TextField,
  Button,
  Box,
  Typography,
  Chip,
  IconButton,
  Card,
  CardMedia,
  Autocomplete,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

export interface ProductFormData {
  title: string;
  price: string;
  discount_percentage: string;
  discount_start_date: string;
  discount_end_date: string;
  category: string;
  type: string[];
  description: string;
  images: File[];
  status_product: "active" | "inactive";
}

interface FormProductProps {
  form: UseFormReturn<ProductFormData>;
  onSubmit: (data: ProductFormData) => void;
  submitButtonText?: string;
  title?: string;
}

const FormProduct = ({
  form,
  onSubmit,
  submitButtonText = "Simpan Produk",
  title = "Form Produk",
}: FormProductProps) => {
  const [typeInput, setTypeInput] = useState("");
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    setError,
    clearErrors,
  } = form;

  const categories = ["Mobil", "Motor", "Elektronik", "Fashion", "Lainnya"];
  const currentTypes = watch("type");
  const currentImages = watch("images") || [];

  const handleAddType = () => {
    if (typeInput.trim() && !currentTypes.includes(typeInput.trim())) {
      setValue("type", [...currentTypes, typeInput.trim()]);
      setTypeInput("");
    }
  };

  const handleDeleteType = (typeToDelete: string) => {
    setValue(
      "type",
      currentTypes.filter((type) => type !== typeToDelete)
    );
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddType();
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const newFiles = Array.from(files);
    const totalImages = currentImages.length + newFiles.length;

    // Validasi max 10 images
    if (totalImages > 10) {
      setError("images", {
        type: "manual",
        message: "Maksimal 10 gambar",
      });
      return;
    }

    // Clear error if valid
    clearErrors("images");

    // Update images
    const updatedImages = [...currentImages, ...newFiles];
    setValue("images", updatedImages);

    // Create preview URLs
    const newPreviews = newFiles.map((file) => URL.createObjectURL(file));
    setImagePreviews([...imagePreviews, ...newPreviews]);
  };

  const handleDeleteImage = (index: number) => {
    // Revoke URL to prevent memory leak
    URL.revokeObjectURL(imagePreviews[index]);

    // Remove from arrays
    const updatedImages = currentImages.filter((_, i) => i !== index);
    const updatedPreviews = imagePreviews.filter((_, i) => i !== index);

    setValue("images", updatedImages);
    setImagePreviews(updatedPreviews);

    // Clear error if we still have images
    if (updatedImages.length > 0) {
      clearErrors("images");
    }
  };

  return (
    <Box sx={{ maxWidth: 800, mx: "auto", p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 4, fontWeight: 600 }}>
        {title}
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {/* Title */}
          <Box>
            <Typography variant="subtitle1" gutterBottom>
              Nama Produk <span style={{ color: "red" }}>*</span>
            </Typography>
            <Controller
              name="title"
              control={control}
              rules={{ required: "Nama produk harus diisi" }}
              render={({ field }) => (
                <TextField
                  {...field}
                  placeholder="Masukkan nama produk"
                  fullWidth
                  error={!!errors.title}
                  helperText={errors.title?.message}
                />
              )}
            />
          </Box>

          {/* Price */}
          <Box>
            <Typography variant="subtitle1" gutterBottom>
              Harga Produk <span style={{ color: "red" }}>*</span>
            </Typography>
            <Controller
              name="price"
              control={control}
              rules={{
                required: "Harga harus diisi",
                validate: (value) => {
                  const num = Number(value);
                  if (isNaN(num)) return "Harga harus berupa angka";
                  if (num < 0) return "Harga tidak boleh negatif";
                  return true;
                },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  placeholder="Contoh: 150000"
                  type="number"
                  fullWidth
                  error={!!errors.price}
                  helperText={errors.price?.message || "Harga normal produk (tanpa diskon)"}
                />
              )}
            />
          </Box>

          {/* Discount Percentage */}
          <Box>
            <Typography variant="subtitle1" gutterBottom>
              Diskon (%)
            </Typography>
            <Controller
              name="discount_percentage"
              control={control}
              rules={{
                validate: (value) => {
                  if (!value) return true; // Optional field
                  const num = Number(value);
                  if (isNaN(num)) return "Diskon harus berupa angka";
                  if (num < 0) return "Diskon tidak boleh negatif";
                  if (num > 100) return "Diskon maksimal 100%";
                  return true;
                },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  placeholder="Contoh: 25"
                  type="number"
                  fullWidth
                  error={!!errors.discount_percentage}
                  helperText={errors.discount_percentage?.message || "Opsional. Contoh: 25 untuk diskon 25%"}
                  inputProps={{ min: 0, max: 100 }}
                  onChange={(e) => {
                    const value = e.target.value;
                    const num = Number(value);
                    if (value === "" || (num >= 0 && num <= 100)) {
                      field.onChange(value);
                    }
                  }}
                />
              )}
            />
          </Box>

          {/* Discount Date Range */}
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2 }}>
            {/* Discount Start Date */}
            <Box>
              <Typography variant="subtitle1" gutterBottom>
                Tanggal Mulai Diskon
              </Typography>
              <Controller
                name="discount_start_date"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    type="date"
                    fullWidth
                    error={!!errors.discount_start_date}
                    helperText={errors.discount_start_date?.message}
                    InputLabelProps={{ shrink: true }}
                  />
                )}
              />
            </Box>

            {/* Discount End Date */}
            <Box>
              <Typography variant="subtitle1" gutterBottom>
                Tanggal Berakhir Diskon
              </Typography>
              <Controller
                name="discount_end_date"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    type="date"
                    fullWidth
                    error={!!errors.discount_end_date}
                    helperText={errors.discount_end_date?.message}
                    InputLabelProps={{ shrink: true }}
                  />
                )}
              />
            </Box>
          </Box>

          {/* Status Product */}
          <Box>
            <Typography variant="subtitle1" gutterBottom>
              Status Produk <span style={{ color: "red" }}>*</span>
            </Typography>
            <Controller
              name="status_product"
              control={control}
              rules={{ required: "Status produk harus dipilih" }}
              render={({ field }) => (
                <FormControl fullWidth error={!!errors.status_product}>
                  <Select {...field} displayEmpty>
                    <MenuItem value="" disabled>
                      Pilih status produk
                    </MenuItem>
                    <MenuItem value="active">Aktif</MenuItem>
                    <MenuItem value="inactive">Non-aktif</MenuItem>
                  </Select>
                  {errors.status_product && (
                    <Typography variant="caption" color="error" sx={{ mt: 0.5 }}>
                      {errors.status_product.message}
                    </Typography>
                  )}
                </FormControl>
              )}
            />
          </Box>

          {/* Category */}
          <Box>
            <Typography variant="subtitle1" gutterBottom>
              Kategori <span style={{ color: "red" }}>*</span>
            </Typography>
            <Controller
              name="category"
              control={control}
              rules={{ required: "Kategori harus dipilih" }}
              render={({ field: { onChange, value } }) => (
                <Autocomplete
                  options={categories}
                  value={value || null}
                  onChange={(_, newValue) => onChange(newValue || "")}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      placeholder="Cari atau pilih kategori"
                      error={!!errors.category}
                      helperText={errors.category?.message}
                    />
                  )}
                  fullWidth
                />
              )}
            />
          </Box>

          {/* Type (Input with Add Button) */}
          <Box>
            <Typography variant="subtitle1" gutterBottom>
              Tipe Produk
            </Typography>
            <Box sx={{ display: "flex", gap: 1, alignItems: "flex-start" }}>
              <TextField
                fullWidth
                value={typeInput}
                onChange={(e) => setTypeInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ketik tipe dan tekan Enter atau klik tombol +"
                error={!!errors.type}
                helperText={
                  errors.type?.message || "Contoh: GT Sport, VIP, Class A"
                }
              />
              <IconButton
                onClick={handleAddType}
                sx={{
                  bgcolor: "var(--primary)",
                  color: "white",
                  mt: 0.5,
                  "&:hover": { bgcolor: "var(--primary)", opacity: 0.9 },
                }}
              >
                <AddIcon />
              </IconButton>
            </Box>

            {/* Display Added Types as Chips */}
            {currentTypes.length > 0 && (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 2 }}>
                {currentTypes.map((type, index) => (
                  <Chip
                    key={index}
                    label={type}
                    onDelete={() => handleDeleteType(type)}
                    sx={{
                      bgcolor: "var(--primary)",
                      color: "white",
                      "& .MuiChip-deleteIcon": {
                        color: "white",
                        "&:hover": { color: "rgba(255,255,255,0.7)" },
                      },
                    }}
                  />
                ))}
              </Box>
            )}
          </Box>

          {/* Description */}
          <Box>
            <Typography variant="subtitle1" gutterBottom>
              Deskripsi Produk <span style={{ color: "red" }}>*</span>
            </Typography>
            <Controller
              name="description"
              control={control}
              rules={{ required: "Deskripsi harus diisi" }}
              render={({ field }) => (
                <TextField
                  {...field}
                  placeholder="Masukkan deskripsi produk secara detail"
                  multiline
                  rows={6}
                  fullWidth
                  error={!!errors.description}
                  helperText={errors.description?.message}
                />
              )}
            />
          </Box>

          {/* Images Upload */}
          <Box>
            <Typography variant="subtitle1" gutterBottom>
              Gambar Produk <span style={{ color: "red" }}>*</span>
            </Typography>
            <Typography variant="caption" color="text.secondary" sx={{ mb: 2 }}>
              Upload minimal 1 gambar, maksimal 10 gambar
            </Typography>

            <Controller
              name="images"
              control={control}
              rules={{
                required: "Minimal 1 gambar harus diupload",
                validate: (value) =>
                  value.length >= 1 || "Minimal 1 gambar harus diupload",
              }}
              render={({ field }) => (
                <Box>
                  <Button
                    component="label"
                    variant="outlined"
                    startIcon={<CloudUploadIcon />}
                    disabled={currentImages.length >= 10}
                    fullWidth
                    sx={{
                      mt: 1,
                      borderColor: errors.images ? "error.main" : "primary.main",
                      color: errors.images ? "error.main" : "primary.main",
                      "&:hover": {
                        borderColor: errors.images ? "error.dark" : "primary.dark",
                      },
                    }}
                  >
                    Upload Gambar ({currentImages.length}/10)
                    <input
                      type="file"
                      hidden
                      multiple
                      accept="image/*"
                      onChange={handleImageUpload}
                    />
                  </Button>
                  {errors.images && (
                    <Typography variant="caption" color="error" sx={{ mt: 1, display: "block" }}>
                      {errors.images.message}
                    </Typography>
                  )}
                </Box>
              )}
            />

            {/* Image Previews */}
            {imagePreviews.length > 0 && (
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "repeat(2, 1fr)",
                    sm: "repeat(3, 1fr)",
                    md: "repeat(4, 1fr)",
                  },
                  gap: 2,
                  mt: 3,
                }}
              >
                {imagePreviews.map((preview, index) => (
                  <Card
                    key={index}
                    sx={{
                      position: "relative",
                      "&:hover .delete-button": {
                        opacity: 1,
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="150"
                      image={preview}
                      alt={`Preview ${index + 1}`}
                      sx={{ objectFit: "cover" }}
                    />
                    <IconButton
                      className="delete-button"
                      onClick={() => handleDeleteImage(index)}
                      sx={{
                        position: "absolute",
                        top: 5,
                        right: 5,
                        bgcolor: "rgba(0,0,0,0.6)",
                        color: "white",
                        opacity: 0,
                        transition: "opacity 0.3s",
                        "&:hover": {
                          bgcolor: "rgba(255,0,0,0.8)",
                        },
                      }}
                      size="small"
                    >
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </Card>
                ))}
              </Box>
            )}
          </Box>

          {/* Submit Button */}
          <Button
            type="submit"
            variant="contained"
            size="large"
            sx={{
              bgcolor: "var(--primary)",
              "&:hover": { bgcolor: "var(--primary)", opacity: 0.9 },
            }}
          >
            {submitButtonText}
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default FormProduct;
