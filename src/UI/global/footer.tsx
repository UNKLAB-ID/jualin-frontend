import EmailIcon from "@/assets/icons/email-icons";
import LocationIcons from "@/assets/icons/location-icons";
import PhoneIcons from "@/assets/icons/phone-icons";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-20">
        {/* Grid responsive: 1 kolom mobile, 2 kolom tablet, 3 kolom desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Kolom 1: Logo & Deskripsi */}
          <div>
            {/* Logo */}
            <div className="flex items-center space-x-3 mb-4">
              {/* <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="w-8 h-8 object-contain"
                />
              </div> */}
              <div>
                <h1 className="text-xl font-bold text-gray-900">AutoRental</h1>
                <p className="text-xs text-gray-500">Jual barang Cepat</p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Platform jual beli online terpercaya untuk semua kebutuhan Anda.
              Jual cepat, beli mudah, transaksi aman.
            </p>
          </div>

          {/* Kolom 2: Contact Us */}
          <div>
            <h3 className="font-semibold text-lg mb-4 mt-8 md:mt-0">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <LocationIcons />
                <span>Jl. Sultan Alauddin No. 123, Makassar, Indonesia</span>
              </li>
              <li className="flex items-center gap-2">
                <PhoneIcons />
                <span>+62 812-3456-7890</span>
              </li>
              <li className="flex items-center gap-2">
                <EmailIcon />
                <span>putracantik@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Follow Us (gabung dengan Contact di tablet) */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="font-semibold text-lg mb-4 mt-8 md:mt-0">Follow Us</h3>
            <div className="flex items-center gap-4">
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <FacebookIcon sx={{ fontSize: 40 }} className="text-gray-700 hover:text-blue-600 transition-colors" />
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <InstagramIcon sx={{ fontSize: 40 }} className="text-gray-700 hover:text-pink-600 transition-colors" />
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <LinkedInIcon sx={{ fontSize: 40 }} className="text-gray-700 hover:text-blue-700 transition-colors" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[var(--primary)] text-white text-center py-4">
        <p>copyright @2024 sukangodingaja All rights recurved</p>
      </div>
    </footer>
  );
};

export default Footer;
