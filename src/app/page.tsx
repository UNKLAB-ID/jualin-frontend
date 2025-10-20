'use client';
import { 
  Button, 
  Card, 
  CardContent, 
  Typography, 
  Container, 
  Box,
  Chip,
  Stack
} from '@mui/material';
import { 
  ShoppingCart, 
  Favorite, 
  Star 
} from '@mui/icons-material';

export default function Home() {
  return (
    <Container maxWidth="lg" className="py-8">
      {/* Header dengan Tailwind */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Jualin Frontend
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Next.js application dengan Tailwind CSS dan Material-UI
        </p>
      </div>

      {/* Grid produk dengan kombinasi MUI dan Tailwind */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {/* Card 1 */}
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardContent>
            <div className="flex justify-between items-start mb-4">
              <Typography variant="h6" component="h2">
                Produk Unggulan
              </Typography>
              <Chip label="Best Seller" color="primary" size="small" />
            </div>
            <Typography variant="body2" color="text.secondary" className="mb-4">
              Deskripsi produk yang menarik dan berkualitas tinggi
            </Typography>
            <div className="flex items-center mb-4">
              <Star className="text-yellow-500 mr-1" />
              <span className="text-sm text-gray-600">4.8 (123 reviews)</span>
            </div>
            <div className="flex justify-between items-center">
              <Typography variant="h6" className="text-green-600 font-bold">
                Rp 299.000
              </Typography>
              <Button 
                variant="contained" 
                startIcon={<ShoppingCart />}
                size="small"
              >
                Beli
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Card 2 */}
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardContent>
            <div className="flex justify-between items-start mb-4">
              <Typography variant="h6" component="h2">
                Produk Favorit
              </Typography>
              <Chip label="Hot" color="secondary" size="small" />
            </div>
            <Typography variant="body2" color="text.secondary" className="mb-4">
              Produk favorit pelanggan dengan kualitas terbaik
            </Typography>
            <div className="flex items-center mb-4">
              <Star className="text-yellow-500 mr-1" />
              <span className="text-sm text-gray-600">4.9 (87 reviews)</span>
            </div>
            <div className="flex justify-between items-center">
              <Typography variant="h6" className="text-green-600 font-bold">
                Rp 450.000
              </Typography>
              <Button 
                variant="outlined" 
                startIcon={<Favorite />}
                size="small"
              >
                Wishlist
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Card 3 */}
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardContent>
            <div className="flex justify-between items-start mb-4">
              <Typography variant="h6" component="h2">
                Produk Baru
              </Typography>
              <Chip label="New" color="success" size="small" />
            </div>
            <Typography variant="body2" color="text.secondary" className="mb-4">
              Produk terbaru dengan teknologi terkini
            </Typography>
            <div className="flex items-center mb-4">
              <Star className="text-yellow-500 mr-1" />
              <span className="text-sm text-gray-600">5.0 (12 reviews)</span>
            </div>
            <div className="flex justify-between items-center">
              <Typography variant="h6" className="text-green-600 font-bold">
                Rp 199.000
              </Typography>
              <Button 
                variant="contained" 
                color="secondary"
                startIcon={<ShoppingCart />}
                size="small"
              >
                Beli
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Action buttons dengan MUI */}
      <Box className="text-center">
        <Stack direction="row" spacing={2} justifyContent="center">
          <Button 
            variant="contained" 
            size="large"
            className="bg-blue-600 hover:bg-blue-700"
          >
            Lihat Semua Produk
          </Button>
          <Button 
            variant="outlined" 
            size="large"
            className="border-blue-600 text-blue-600 hover:bg-blue-50"
          >
            Kategori
          </Button>
        </Stack>
      </Box>

      {/* Footer dengan Tailwind */}
      <footer className="mt-16 pt-8 border-t border-gray-200">
        <div className="text-center text-gray-600">
          <p>&copy; 2025 Jualin Frontend. Built with Next.js, Tailwind CSS, and Material-UI.</p>
        </div>
      </footer>
    </Container>
  );
}
